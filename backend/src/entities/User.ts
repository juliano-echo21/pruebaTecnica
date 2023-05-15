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
  creditBalance: string;

  @Column({ name: 'external_User_id', nullable: true })
  externalUserId: string;

  @Column({ name: 'in_default', nullable: false, default: false })
  inDefault: boolean;

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.User)
  paymentMethods: PaymentMethod[];
}
