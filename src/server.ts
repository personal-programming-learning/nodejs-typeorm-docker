import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './routes/user.router';
import { ConfigServer } from './config/config';
import { DataSource } from 'typeorm';

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

  async dbConnect(): Promise<DataSource>{
    return await new DataSource(this.typeORMConfig).initialize();
  }

  public listen(callback: (port: number) => void): void {
    let port = parseInt(this.getNumberEnv('PORT') as any) || 8000;
    this.app.listen(port, ()=> {
      callback(port);
      this.init();
    })
  }

}

new ServerBootstrap();