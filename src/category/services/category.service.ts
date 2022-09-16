import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { CategoryEntity } from "../entities/category.entity";
import { CategoryDTO } from "../dto/category.dto";


export class CategoryService extends BaseService<CategoryEntity> {
  constructor(){
    super(CategoryEntity);
  }

  async findAll(): Promise<CategoryEntity[]> {
    return (await this.execRepository).find();
  }
  async findById(id: string): Promise<CategoryEntity | undefined | null> {
    return (await this.execRepository).findOneBy({id});
  }
  async create(body: CategoryDTO): Promise<CategoryEntity> {
    return (await this.execRepository).save(body);
  }
  async update(id: string, body: CategoryDTO | any): Promise<UpdateResult> {
    return (await this.execRepository).update(id, body);
  }
  async delete(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

}