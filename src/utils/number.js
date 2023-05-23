/**
 * Parses a string value into a number
 * @param {*} value 
 * @returns 
 */
function parseNumber(value = "") {
  // Split the value by the letter ‘m’
  const parsedValue = value.split("m");

  // If the first element of the split array is not empty, 
  // trim any whitespace and convert it to a number with two decimal places
  return parsedValue[0] ? parseFloat(parsedValue[0].trim()).toFixed(2) : null;
}

/**
 * Checks if a string is a number
 * @param {*} str 
 * @returns 
 */
function isNumber(str) {
  // @Trick: If the string includes both ‘m’ and ‘ft’, return true
  if ((str.includes('m') && str.includes('ft'))) {
    return true;
  }
  
  if (!isNaN(str)) {
    return true;
  }

  return false;
}

module.exports = {parseNumber, isNumber}