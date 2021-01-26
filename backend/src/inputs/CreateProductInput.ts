import { InputType, Field } from "type-graphql";

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  details: string;

  @Field()
  imgUrl: string;

  @Field()
  price: number;

  @Field()
  qtty: number;
}
