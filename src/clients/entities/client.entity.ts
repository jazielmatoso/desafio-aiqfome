import { Product } from '@root/src/products/entities';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'clients', schema: 'public' })
export class Client {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: string;

  @Column({ name: 'updated_at', type: 'timestamp', default: null })
  updatedAt?: string;

  @ManyToMany(() => Product, (product) => product.clients)
  @JoinTable()
  products?: Product[];
}
