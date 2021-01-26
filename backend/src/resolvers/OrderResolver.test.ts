import FakeOrderResolver from "./fakeResolvers/FakeOrderResolver";

let fakeOrderResolver = new FakeOrderResolver();

describe("OrderTests", () => {
  it("should be able to fetch the orders list", () => {
    const order1 = fakeOrderResolver.createOrder({
      id: "1",
      customer: "fulaninho",
      products: [
        {
          id: "1",
          qtty: 10,
        },
      ],
      total: 10,
    });

    const order2 = fakeOrderResolver.createOrder({
      id: "2",
      customer: "de tal",
      products: [
        {
          id: "2",
          qtty: 30,
        },
      ],
      total: 60,
    });

    const orders = fakeOrderResolver.orders();

    expect(orders).toEqual([order1, order2]);
  });

  it("should be able to create an order", () => {
    const order = fakeOrderResolver.createOrder({
      id: "1",
      customer: "fulaninho",
      products: [
        {
          id: "1",
          qtty: 10,
        },
      ],
      total: 10,
    });

    expect(order.id).toBeTruthy();
  });
});
