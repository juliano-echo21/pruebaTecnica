import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentMethod } from './PaymentMethod';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  surname: boolean;

  @Column()
  username: boolean;

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.User)
  paymentMethods: PaymentMethod[];
}
