import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../config/base.entity';
import { CategoryEntity } from '../../category/entities/category.entity';
import { PurchasesProductsEntity } from '../../purchase/entities/purchasesProducts.entity';

@Entity({
  name: "products"
})
export class ProductsEntity extends BaseEntity {
  
  @Column()
  productName!:string;
  
  @Column()
  description!:string;
  
  @Column()
  price!:number;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: "category_id" })
  category!: CategoryEntity;

  @OneToMany(() => PurchasesProductsEntity, (purchaseProduct) => purchaseProduct.products)
  purchaseProduct!: PurchasesProductsEntity[];
}