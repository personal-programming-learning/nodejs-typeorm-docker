import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { CustomersEntity } from '../../customer/entities/customer.entity';

@Entity({
  name: "users"
})
export class UserEntity extends BaseEntity {
  
  @Column({ length: 150 })
  name!:string;
  
  @Column({ length: 100 })
  lastname!:string;

  @Column("varchar", { length: 100 })
  username!: string;

  @Column({ length: 100 })
  email!:string;

  @Column()
  password!:string;

  @Column()
  city?:string;

  @Column()
  province!:number;

  @OneToOne(() => CustomersEntity, (customer) => customer.user)
  customer!: CustomersEntity;
}