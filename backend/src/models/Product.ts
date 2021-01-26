import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID, Float, Int } from "type-graphql";

@Entity()
@ObjectType()
export class Product extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  details: string;

  @Field(() => String)
  @Column()
  imgUrl: string;

  @Field(() => Float)
  @Column()
  price: number;

  @Field(() => Int)
  @Column()
  qtty: number;
}
