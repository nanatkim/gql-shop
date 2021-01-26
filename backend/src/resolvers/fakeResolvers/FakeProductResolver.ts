interface Product {
  id: String;
  name: String;
  details: String;
  imgUrl: String;
  price: Number;
  qtty: Number;
}

class FakeProductResolver {
  private productsList: Product[] = [];

  public products() {
    return this.productsList;
  }

  public createProduct(data: Product) {
    const product: Product = {
      ...data,
    };

    this.productsList.push(product);

    return product;
  }

  public product(id: String) {
    return this.productsList.find((product: Product) => product.id === id);
  }
}

export default FakeProductResolver;
