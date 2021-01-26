import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { ObjectType, Field, ID, Float, Int } from "type-graphql";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
@ObjectType()
export class OrderProduct extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => Order)
  @ManyToOne(() => Order)
  order: Order;

  @Field(() => Product)
  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @Field(() => Float)
  @Column()
  price: number;

  @Field(() => Int)
  @Column()
  qtty: number;
}
