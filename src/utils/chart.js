var ChartJSImage = require("chart.js-image");

function saveChartToPNG(labels, datasets, fileName = null) {
  try {
    const line_chart = ChartJSImage()
      .chart({
        type: "line",
        data: {
          labels,
          datasets,
        },
        options: {
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                stacked: false,
                scaleLabel: {
                  display: false,
                },
              },
            ],
          },
          plugins: {
            legend: { display: false },
            title: {
              display: false,
            },
            subtitle: {
              display: false,
            },
          },
        },
      }) // Line chart
      .backgroundColor("white")
      .width(1280) // 500px
      .height(400); // 300px

    const path = `public/charts/chart-${fileName ? fileName : Date.now()}.png`;
    line_chart.toFile(path);

    return path;
  } catch {
    return null;
  }
}

module.exports = { saveChartToPNG };
