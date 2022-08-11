import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../../config/base.entity';
import { ProductsEntity } from '../../product/entities/product.entity';


@Entity({
  name: "categories"
})
export class CategoryEntity extends BaseEntity {
  
  @Column()
  categoryName!:string;
  
  @Column()
  description!:string;

  @OneToMany(() => ProductsEntity, (products) => products.category)
  products!: ProductsEntity[];
}