import { BaseRouter } from "../shared/router/router"
import { CategoryController } from "./controllers/category.controller";

export class CategoryRouter extends BaseRouter<CategoryController> {
  
  constructor(){
    super(CategoryController);
  }

  routes(): void {
    this.router.get('/categories', (req,res)=> this.controller.getAll(req,res));
    this.router.get('/categories/:id', (req,res)=> this.controller.getById(req,res));
    this.router.post('/categories', (req,res)=> this.controller.create(req,res));
    this.router.put('/categories/:id', (req,res)=> this.controller.update(req,res));
    this.router.delete('/categories/:id', (req,res)=> this.controller.delete(req,res));
  }

}