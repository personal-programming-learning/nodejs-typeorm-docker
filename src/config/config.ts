import * as dotenv from 'dotenv';

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

}