import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { DataSource } from 'typeorm';

import { UserRouter } from './user/user.router';
import { CategoryRouter } from './category/category.router';
import { ConfigServer } from './config/config';

export class ServerBootstrap extends ConfigServer {

  public app: express.Application = express();

  constructor() {
    super();
  }
  
  private init() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    // DB
    this.dbConnect();

    this.app.use(morgan('dev'));
    this.app.use(cors());
    // Routes
    this.app.use('/api', this.routers());
  }

  public routers(): Array<express.Router>{
    return [
      new UserRouter().router,
      new CategoryRouter().router,
    ];
  }

  async dbConnect(): Promise< DataSource | void> {
    return this.initConnect
      .then(() => {
        console.log('Connecting to database successfully')
      }).catch((err: any) => {
        console.error(err)
      });

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