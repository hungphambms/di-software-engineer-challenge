var { parseDom, getItemsFromDom } = require("./dom.js");

var mockHtml =
  "<html><head><title>Example Domain</title></head><body><h1>Example Domain</h1><p>This domain is for use in illustrative examples in documents.</p><table class='wikitable'><tbody><tr><td>1</td><td>A</td></tr><tr><td>2</td><td>B</td></tr></tbody></table></body></html>";

const validItems = [
  { value: "1.00", col0: "1.00", col1: "A" },
  { value: "2.00", col0: "2.00", col1: "B" },
];
var $ = parseDom(mockHtml);

test("parseDOM can parse DOM Object from HTML and we can access to DOM Object", () => {
  expect($("title").text()).toBe("Example Domain");
  expect($("h1").text()).toBe("Example Domain");
  expect($("p").text()).toBe(
    "This domain is for use in illustrative examples in documents."
  );
});

test("should get valid items after call getItemsFromDom", () => {
  const items = getItemsFromDom($);
  expect(items).toStrictEqual(validItems);
});
