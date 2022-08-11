import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../config/base.entity';
import { CustomersEntity } from '../../customer/entities/customer.entity';
import { PurchasesProductsEntity } from '../../custom/entities/purchasesProducts.entity';

@Entity({
  name: "purchases"
})
export class PurchasesEntity extends BaseEntity {
  
  @Column()
  status!:string;
  
  @Column()
  paymentMethod!:string;

  @ManyToOne(() => CustomersEntity, (customer) => customer.purchases)
  @JoinColumn({ name: "customer_id" })
  customer!: CustomersEntity;

  @OneToMany(() => PurchasesProductsEntity, (purchaseProduct) => purchaseProduct.purchase)
  purchaseProduct!: PurchasesProductsEntity[];
}