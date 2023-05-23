const { fetchHTML } = require("../api/fetch.js");
var { saveChartToPNG } = require("../utils/chart.js");
const { getItemsFromDom, parseDom } = require("../utils/dom.js");

/**
 * This function runs the main logic of the program 
 * - Get the URL from the command line arguments
 * - Fetch the HTML content from the URL
 * - Check if the HTML content is valid and Parse the HTML content into a DOM object
 * - Prepare Chart Data (labels and datasets) from the items array
 * - Save the chart as a PNG image file
 * @returns 
 */
async function run() {
  // Get the URL from the command line arguments
  const args = process.argv;
  const url = args[2];

  // Fetch the HTML content from the URL
  const html = await fetchHTML(url);
  if (!html) {
    console.log("\n System cannot check content from your url. Please check and try again! \n");
    return;
  }

  // Parse the HTML content into a DOM objec
  const $ = parseDom(html);
  const items = await getItemsFromDom($);

  if (!items) {
    console.log("\n Your url have no any table in HTML Content. Please check and try again! \n");
    return;
  }
  
  // Prepare Chart Data from the items array
  const labels = items.map((o) => o.col1);
  const datasets = [
    {
      label: null,
      data: items.map((o) => o.value),
    },
  ];

  // Save the chart as a PNG image file
  const path = saveChartToPNG(labels, datasets);

  console.log(`\n Your image is saved in: ${path} \n`);
}

run();
