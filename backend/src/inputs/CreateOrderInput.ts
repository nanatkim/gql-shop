import { InputType, Field, Int, ID } from "type-graphql";

@InputType()
class Item {
  @Field(() => ID)
  productID: string;

  @Field(() => Int)
  qtty: number;
}

@InputType()
export class CreateOrderInput {
  @Field(() => String)
  customer: string;

  @Field(() => String)
  creditCard: string;

  @Field(() => [Item])
  products: Item[];
}
