import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { ObjectType, Field, ID, Float, Int } from "type-graphql";
import { OrderProduct } from "./OrderProduct";

@Entity()
@ObjectType()
export class Order extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  customer: string;

  @Field(() => [OrderProduct])
  @OneToMany(() => OrderProduct, (p) => p.order, { eager: true })
  products: OrderProduct[];

  @Field(() => Float)
  @Column({ type: "float" })
  total: number;
}
