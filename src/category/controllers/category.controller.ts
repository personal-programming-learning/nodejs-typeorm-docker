import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { HttpResponse } from "../../shared/response/http.response";
import { CategoryService } from '../services/category.service';

export class CategoryController {

  constructor(
    private readonly categoryService: CategoryService = new CategoryService(), 
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ){}

  async getAll(req: Request, res: Response) {
    const { body } = req;
    try {
      const response = await this.categoryService.findAll();
      if(!response.length){
        return this.httpResponse.NotFound(res, 'No existen datos');
      }
      return this.httpResponse.Ok(res, response);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const response = await this.categoryService.findById(id);
      if(!response){
        return this.httpResponse.NotFound(res, 'No existe dato');
      }
      return this.httpResponse.Ok(res, response);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async create(req: Request, res: Response) {
    const { body } = req;
    try {
      const response = await this.categoryService.create(body)
      return this.httpResponse.Created(res, response)
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async update(req: Request, res: Response) {
    const { body, params } = req;
    try {
      const response: UpdateResult = await this.categoryService.update(params.id ,body);
      if(!response.affected){
        return this.httpResponse.Error(res, 'Hay en error en actualizar');
      }
      return this.httpResponse.Ok(res, response);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const response: DeleteResult = await this.categoryService.delete(id);
      if(!response.affected){
        return this.httpResponse.Error(res, 'Hay en error en eliminar');
      }
      return this.httpResponse.Ok(res, response);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }
}