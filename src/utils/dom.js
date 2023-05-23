var cheerio = require("cheerio");
const { isNumber, parseNumber } = require("./number.js");

/**
 * Parses the HTML content into a DOM object using cheerio
 * @param {*} html 
 * @returns 
 */
function parseDom(html = "") {
  return cheerio.load(html);
}

/**
 * Extracts the data from the first table element in the HTML function
 *
 * @param {*} $
 * @returns
 */
function getItemsFromDom($) {
  if (!$("table.wikitable").length) {
    return;
  }

  // Find the first table element in the HTML
  const table = $("table.wikitable").first();

  // Initialize an empty array to store the table data
  let data = [];

  // Loop through each row of the table
  table.find("tr").each((i, row) => {
    let rowData = {};

    $(row)
      .find("td")
      .each((j, cell) => {
        let cellText = $(cell).text().trim();

        if (isNumber(cellText)) {
          cellText = parseNumber(cellText);
          rowData.value = cellText;
        }

        rowData[`col${j}`] = cellText;
      });

    // If the row data object is not empty, push it to the data array
    if (Object.keys(rowData).length > 0) {
      data.push(rowData);
    }
  });

  return data;
}

module.exports = { parseDom, getItemsFromDom };
