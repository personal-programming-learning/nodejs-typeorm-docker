import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { UserDTO } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";

export class UserService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  async findAllUser(): Promise<UserEntity[]>{
    return ( await this.execRepository ).find();
  }

  async findByIdUser(id: string): Promise<UserEntity | undefined | null>{
    return (await this.execRepository).findOneBy({ id });
  }
    
  async createUser(body: UserDTO): Promise<UserEntity>{
    return ( await this.execRepository ).save(body);
  }

  async updateUser(id: string, body: UserDTO | any): Promise<UpdateResult>{
    return (await this.execRepository).update(id, body)
  }

  async deleteUser(id: string): Promise<DeleteResult>{
    return (await this.execRepository).delete({ id });
  }

}