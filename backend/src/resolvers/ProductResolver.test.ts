import FakeProductResolver from "./fakeResolvers/FakeProductResolver";

let fakeProductResolver = new FakeProductResolver();

describe("ProductTests", () => {
  it("should be able to fetch the products list", () => {
    const product1 = fakeProductResolver.createProduct({
      id: "1",
      name: "blue shirt",
      details: "a jeans long sleeved shirt",
      imgUrl: "http://shirtimage.com",
      price: 60.0,
      qtty: 10,
    });

    const product2 = fakeProductResolver.createProduct({
      id: "2",
      name: "a mug",
      details: "a mug for your coffe :D",
      imgUrl: "http://mugimage.com",
      price: 50.0,
      qtty: 15,
    });

    const products = fakeProductResolver.products();

    expect(products).toEqual([product1, product2]);
  });

  it("should be able to create a product", () => {
    const product = fakeProductResolver.createProduct({
      id: "1",
      name: "blue shirt",
      details: "a jeans long sleeved shirt",
      imgUrl: "http://shirtimage.com",
      price: 60.0,
      qtty: 10,
    });

    expect(product.id).toBeTruthy();
  });

  it("should be able to find a single product", () => {
    const product = fakeProductResolver.createProduct({
      id: "1",
      name: "blue shirt",
      details: "a jeans long sleeved shirt",
      imgUrl: "http://shirtimage.com",
      price: 60.0,
      qtty: 10,
    });

    const foundProduct = fakeProductResolver.product("1");

    expect(product).toEqual(foundProduct);
  });
});
