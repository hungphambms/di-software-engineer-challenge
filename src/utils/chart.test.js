var { saveChartToPNG } = require("./chart.js");

test("should return image path after pass valid datasets", () => {
  const filePath = saveChartToPNG(
    ["Nancy Voorhees (USA)", "Elizabeth Stine (USA)"],
    [
      {
        label: null,
        data: ["1.46", "1.49"],
      }
    ],
    'Sample'
  );
  expect(filePath).toBe("public/charts/chart-Sample.png");
});
