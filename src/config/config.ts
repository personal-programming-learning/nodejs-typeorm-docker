import * as dotenv from 'dotenv';
import { DataSourceOptions, DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export abstract class ConfigServer {
  constructor() {
    const nodeNameEnv = this.createPathEnv(this.nodeEnv);
    dotenv.config({
      path: `${process.cwd()}/environments/${nodeNameEnv}`,
    })
  }

  public getEnviroment(key: string): string | undefined{
    return process.env[key] // process.env['PORT']
  }

  public getNumberEnv(key: string): number{
    return Number(this.getEnviroment(key));
  }

  public get nodeEnv(): string {
    return this.getEnviroment('ENV')?.trim() || "";
  }

  public createPathEnv(path: string): string {
    const arrEnv: Array<string> = ['env'];
    if(path.length){
      const stringToArray = path.split('.');
      arrEnv.unshift(...stringToArray);
    }
    return '.' + arrEnv.join('.');
  }

  public get typeORMConfig(): DataSourceOptions {
    return {
      type: 'mysql',
      host: this.getEnviroment('DB_HOST'),
      port: this.getNumberEnv('DB_PORT'),
      username: this.getEnviroment('DB_USER'),
      password: this.getEnviroment('DB_PASSWORD'),
      database: this.getEnviroment('DB_DATABASE'),
      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
      synchronize: true,
      logging: false,
      namingStrategy: new SnakeNamingStrategy(),
    }
  }

  async dbConnect(): Promise<DataSource>{
    return await new DataSource(this.typeORMConfig).initialize();
  }

}