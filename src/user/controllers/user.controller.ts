import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { HttpResponse } from "../../shared/response/http.response";
import { UserService } from "../services/user.service";

export class UserController {

  constructor(
    private readonly userService: UserService = new UserService(), 
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ){}

  async getUsers(req: Request, res: Response) {
    const { body } = req;
    try {
      const response = await this.userService.findAllUser();
      if(!response.length){
        return this.httpResponse.NotFound(res, 'No existen datos');
      }
      return this.httpResponse.Ok(res, response);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const response = await this.userService.findByIdUser(id);
      if(!response){
        return this.httpResponse.NotFound(res, 'No existe dato');
      }
      return this.httpResponse.Ok(res, response);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async createUser(req: Request, res: Response) {
    const { body } = req;
    try {
      const response = await this.userService.createUser(body)
      return this.httpResponse.Created(res, response)
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async updateUser(req: Request, res: Response) {
    const { body, params } = req;
    try {
      const response: UpdateResult = await this.userService.updateUser(params.id ,body);
      if(!response.affected){
        return this.httpResponse.Error(res, 'Hay en error en actualizar');
      }
      return this.httpResponse.Ok(res, response);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const response: DeleteResult = await this.userService.deleteUser(id);
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