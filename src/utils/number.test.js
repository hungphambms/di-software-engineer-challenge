var { isNumber } = require("./number.js");

test('string "152" should equal true', () => {
  expect(isNumber("152")).toBe(true);
});

test('string "1.58 m (5 ft 2 in)" should equal true', () => {
  expect(isNumber("1.58 m (5 ft 2 in)")).toBe(true);
});

test('string "3 July 1928" should equal false', () => {
  expect(isNumber("3 July 1928")).toBe(false);
});
