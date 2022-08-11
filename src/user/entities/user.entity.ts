import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({
  name: "users"
})
export class UserEntity extends BaseEntity {
  
  @Column("varchar", { length: 100 })
  username!: string;

  @Column({ length: 150 })
  name!:string;

  @Column("varchar", { length: 100 })
  lastname!:string;

  @Column({
    nullable: true,
  })
  jobposition?:string;

  @Column()
  numberPhone!:number;
}