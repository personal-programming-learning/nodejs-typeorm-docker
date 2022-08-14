import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {

  constructor(private readonly userService: UserService = new UserService()){

  }

  async getUsers(req: Request, res: Response) {
    const { body } = req;
    try {
      const response = await this.userService.findAllUser();
      res.status(200).json(response)
    } catch (error) {
      console.error(error);
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const response = await this.userService.findByIdUser(id)
      res.status(200).json(response)
    } catch (error) {
      console.error(error);
    }
  }

  async createUser(req: Request, res: Response) {
    const { body } = req;
    try {
      const response = await this.userService.createUser(body)
      res.status(201).json(response)
    } catch (error) {
      console.error(error);
    }
  }

  async updateUser(req: Request, res: Response) {
    const { body, params } = req;
    try {
      const response = await this.userService.updateUser(params.id ,body)
      res.status(201).json(response)
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const response = await this.userService.deleteUser(id)
      res.status(200).json(response)
    } catch (error) {
      console.error(error);
    }
  }
}