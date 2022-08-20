function getShape() {
  return random(["circle", "square"]); //
}

function getBackgroundColor() {
  const colors = [
    {
      name: "1",
      background: "#4F4978",
      fill: "#963721",
      stroke: "#BE8238",
    },
    {
      name: "2",
      background: "#BF5934",
      fill: "#45413B",
      stroke: "#B2C47A",
    },
    {
      name: "3",
      background: "#B2C47A",
      fill: "#DFE6E8",
      stroke: "#C9A56B",
    },
    {
      name: "4",
      background: "#BE8238",
      fill: "#E5C846",
      stroke: "#EDC2DD",
    },
    {
      name: "4",
      background: "#F0941D",
      fill: "#F0C651",
      stroke: "#5BA69E",
    },
  ];
  return random(colors);
}

export function getFeatures(fxrand) {
  const features = {
    palette: getBackgroundColor(),
    shape: getShape(),
  };

  for (const [key, value] of Object.entries(features)) {
    console.log(key, value);
  }

  return features;
}
