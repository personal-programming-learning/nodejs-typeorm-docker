import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './routes/user.router';

export class ServerBootstrap {

  public app: express.Application = express();
  
  private init() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(morgan('dev'))
    this.app.use(cors());

    // Routes
    this.app.use('/api', this.routers())
  }

  public routers(): Array<express.Router>{
    return [
      new UserRouter().router,
    ];
  }

  public listen(callback: (port: number) => void): void {
    let port = parseInt(process.env.PORT as any) || 8000;
    this.app.listen(port, ()=> {
      callback(port);
      this.init();
    })
  }

}

new ServerBootstrap();