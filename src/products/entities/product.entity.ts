import { Client } from '@clients/entities';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products', schema: 'public' })
export class Product {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column({ name: 'price', type: 'decimal' })
  price: number;

  @Column()
  review: string;

  @Column()
  apiId: number;

  @ManyToMany(() => Client, (client) => client.products)
  clients?: Client[];
}
