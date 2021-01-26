import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Order } from "../models/Order";
import { CreateOrderInput } from "../inputs/CreateOrderInput";
import { Product } from "../models/Product";
import { OrderProduct } from "../models/OrderProduct";

@Resolver()
export class OrderResolver {
  @Query(() => [Order])
  orders() {
    return Order.find();
  }

  @Query(() => Order)
  async order(@Arg("id") id: string) {
    const order = await Order.findOne({ where: { id } });
    if (!order) throw new Error("Order not found!");

    return order;
  }

  @Mutation(() => Order)
  async createOrder(@Arg("data") data: CreateOrderInput) {
    if (data.creditCard !== "1111111111111111") {
      throw new Error("Invalid credit card");
    }

    data.products.map((p) => {
      if (p.qtty <= 0) {
        throw new Error(
          `The product #${p.productID} quantity should be greater than 0`
        );
      }
    });

    // find the order's products by id
    const productsIds = data.products.map((p) => p.productID);
    let productList = await Product.findByIds(productsIds);

    // check stock quantity and decrease if transaction is possible
    productList = data.products.map((p) => {
      const current = productList.find((product) => product.id == p.productID);

      if (!current)
        throw new Error(`The product #${p.productID} does not exist`);

      if (current.qtty < p.qtty) {
        throw new Error(
          `Product #${p.productID} is out of stock for current quantity`
        );
      }

      current.qtty -= p.qtty;

      return current;
    });

    let total = 0;

    const orderProducts = data.products.map(async (p) => {
      const current = productList.find((product) => product.id == p.productID);

      if (!current)
        throw new Error(`The product #${p.productID} does not exist`);

      await current.save(); // save product with new stock quantity set

      const orderProduct = new OrderProduct();
      Object.assign(orderProduct, {
        product: current,
        price: current.price,
        qtty: p.qtty,
      });

      total += current.price * p.qtty;

      await orderProduct.save();
      return orderProduct;
    });

    const savedProducts = await Promise.all(orderProducts);
    const order = new Order();
    Object.assign(order, {
      customer: data.customer,
      products: savedProducts,
      total,
    });

    await order.save();
    return order;
  }
}

export default [OrderResolver];
