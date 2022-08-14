import { BaseRouter } from "../shared/router/router"
import { UserController } from './controllers/user.controller';

export class UserRouter extends BaseRouter<UserController> {
  
  constructor(){
    super(UserController);
  }

  routes(): void {
    this.router.get('/users', (req,res)=> this.controller.getUsers(req,res));
    this.router.get('/users/:id', (req,res)=> this.controller.getUserById(req,res));
    this.router.post('/users', (req,res)=> this.controller.createUser(req,res));
    this.router.put('/users/:id', (req,res)=> this.controller.updateUser(req,res));
    this.router.delete('/users/:id', (req,res)=> this.controller.deleteUser(req,res));
  }

}