var axios = require("axios");

async function fetchHTML(url) {
  var config = {
    method: "get",
    url,
  };

  try {
    const resp = await axios(config);
    const html = resp.data;
    return html;
  } catch {
    return null;
  }
}

module.exports = { fetchHTML };
