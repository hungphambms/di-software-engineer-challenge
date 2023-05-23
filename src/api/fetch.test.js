const { default: axios } = require("axios");
const { fetchHTML } = require("./fetch");

jest.mock("axios");

const mockUrl =
  "https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression";
const mockData = {
  data: "<html><head><title>Example Domain</title></head><body><h1>Example Domain</h1><p>This domain is for use in illustrative examples in documents.</p></body></html>",
};

// Mock axios.get to resolve with the mock data
axios.mockResolvedValue({ data: mockData });

test("should get html content after call fetchHTML", async () => {
  // Call getData with the mock url
  const data = await fetchHTML(mockUrl);

  // Expect data to be equal to the mock data
  expect(data).toEqual(mockData);

  // Expect axios.get to be called with the mock url
  expect(axios).toHaveBeenCalledWith({
    method: "get",
    url: mockUrl,
  });
});
