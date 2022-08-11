import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

import { BaseEntity } from '../../config/base.entity';
import { PurchasesEntity } from '../../purchase/entities/purchase.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({
  name: "customers"
})
export class CustomersEntity extends BaseEntity {
  
  @Column()
  address!:string;
  
  @Column()
  dni!:number;

  // Relation 1 to 1
  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({ name: "user_id" })
  user!: UserEntity;

  // Ralation one to many
  @OneToMany(() => PurchasesEntity, (purchases) => purchases.customer)
  purchases!: PurchasesEntity[];
}