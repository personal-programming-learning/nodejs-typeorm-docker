import { ConfigServer } from "./config";
import { BaseEntity } from './base.entity';
import { EntityTarget, Repository } from "typeorm";

export class BaseService<T extends BaseEntity> extends ConfigServer {
  public execRepository: Promise<Repository<T>>;

  constructor(private getEntity: EntityTarget<T>){
    super();
    this.execRepository = this.imitRepository(getEntity);
  } 

  async imitRepository<T>(entity: EntityTarget<T>): Promise<Repository<T>> {
    const getConnection = await this.dbConnect();
    return getConnection.getRepository(entity)
  } 

}