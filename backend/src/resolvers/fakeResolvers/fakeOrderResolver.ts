interface OrderProduct {
  id: String;
  qtty: Number;
}

interface Order {
  id: String;
  customer: String;
  products: [OrderProduct];
  total: Number;
}

class FakeOrderResolver {
  private ordersList: Order[] = [];

  public orders() {
    return this.ordersList;
  }

  public createOrder(data: Order) {
    const order: Order = {
      ...data,
    };

    this.ordersList.push(order);

    return order;
  }

  public order(id: String) {
    return this.ordersList.find((order: Order) => order.id === id);
  }
}

export default FakeOrderResolver;
