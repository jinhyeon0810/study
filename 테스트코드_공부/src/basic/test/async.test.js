const fetchProduct = require("../../async");

// test("fetchProduct", async () => {
//   await expect(fetchProduct()).resolves.toEqual({ item: "Milk", price: 200 });
// });

// test("fetchProduct fails with an error", async () => {
//   await expect(fetchProduct()).rejects.toMatch("error");
// });

describe("async", () => {
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });
  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });
  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({ item: "Milk", price: 200 });
  });
  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
