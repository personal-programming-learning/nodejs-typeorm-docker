import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

export class ServerBootstrap {

  public app: express.Application = express();
  
  private init() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(morgan('dev'))
    this.app.use(cors());

    this.initRoutes();
  }

  public initRoutes(){
    this.app.get('/api/hola', (req: Request, res: Response, next: any) => {
      res.status(200).json({
        message: 'Hola mundo - Nodejs !!!'
      })
    })
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