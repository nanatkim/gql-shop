import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateProductInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  details?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  qtty?: number;
}
