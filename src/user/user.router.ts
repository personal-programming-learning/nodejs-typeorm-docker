import { BaseRouter } from "../shared/router/router"
import { UserController } from './controllers/user.controller';

export class UserRouter extends BaseRouter<UserController> {
  
  constructor(){
    super(UserController);
  }

  routes(): void {
    this.router.get('/user', (req,res)=> this.controller.getUser(req,res))
  }

}