import * as puppeteer from "puppeteer";
import * as fs from "fs/promises";
import * as path from "path";

const iterations = 100;

(async () => {
  const epoch = Math.floor(new Date().getTime() / 1000);
  const outputDir = `output-${epoch}`;

  await fs.mkdir(outputDir);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (var i = 0; i < iterations; i++) {
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

    await page.screenshot({
      path: path.join(outputDir, `${metadata.fxhash}.png`),
    });

    await fs.writeFile(
      path.join(outputDir, `${metadata.fxhash}.json`),
      JSON.stringify(metadata)
    );
  }

  await browser.close();
})();
