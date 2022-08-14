import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../config/base.entity';
import { PurchasesEntity } from './purchase.entity';
import { ProductsEntity } from '../../product/entities/product.entity';


@Entity({
  name: "purchases_products"
})
export class PurchasesProductsEntity extends BaseEntity {
  
  @Column()
  quantity!: number;
  
  @Column()
  totalPrice!: number;

  @ManyToOne(() => PurchasesEntity, (purchases) => purchases.purchaseProduct)
  @JoinColumn({ name: "purchase_id" })
  purchase!: PurchasesEntity;

  @ManyToOne(() => ProductsEntity, (products) => products.purchaseProduct)
  @JoinColumn({ name: "product_id" })
  products!: ProductsEntity;
  
}