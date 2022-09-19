import * as puppeteer from "puppeteer";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";

const iterations = 64;

(async () => {
  const epoch = Math.floor(new Date().getTime() / 1000);
  const outputDir = `output-${epoch}`;

  await fs.mkdir(outputDir);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(120000)
  page.setViewport({width:2000, height:2000})


  // Add the beginning of the features file
  
  await fs.appendFile(
    path.join(outputDir, 'features.js'), 
    'let outputs = [' + os.EOL, 
    function (err) {if (err) throw err;}
  );

  for (var i = 0; i < iterations; i++) {
    await sleep(2000)

    console.log(`Iteration ${i}`);
    await page.goto("http://localhost:8080");

    const metadata = JSON.parse(
      await page.evaluate(() =>
        JSON.stringify({
          fxhash: window.fxhash,
          features: window.$fxhashFeatures,
        })
      )
    );
    console.log(metadata.fxhash)

    page.waitForFunction("window.fxPreviewCalled == true")

    await page.screenshot({
      path: path.join(outputDir, `${metadata.fxhash}.png`),
    });

    await fs.writeFile(
      path.join(outputDir, `${metadata.fxhash}.json`),
      JSON.stringify(metadata)
    );

    await fs.appendFile(
      path.join(outputDir, 'features.js'), 
      JSON.stringify(metadata) + ',' + os.EOL, 
      function (err) {if (err) throw err;}
    );

  }

  // Close up the list in the features file.
  await fs.appendFile(
    path.join(outputDir, 'features.js'), 
    ']', 
    function (err) {if (err) throw err;}
  );

  await browser.close();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
})();
