import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './user/user.router';
import { ConfigServer } from './config/config';

export class ServerBootstrap extends ConfigServer {

  public app: express.Application = express();

  constructor() {
    super();
  }
  
  private init() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(morgan('dev'))
    this.app.use(cors());
    // DB
    this.dbConnect();
    // Routes
    this.app.use('/api', this.routers())
  }

  public routers(): Array<express.Router>{
    return [
      new UserRouter().router,
    ];
  }

  public listen(callback: (port: number) => void): void {
    let port = this.getNumberEnv('PORT') || 8000;
    this.app.listen(port, ()=> {
      callback(port);
      this.init();
    })
  }

}

new ServerBootstrap();