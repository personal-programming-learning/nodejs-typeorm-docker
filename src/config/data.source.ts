import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';
import path from 'path';

const pathConfig = process.env.ENV !== undefined ? 
`${path.join(__dirname, '../../environments/')}.${process.env.ENV.trim()}.env` : 
`${path.join(__dirname, '../../environments/')}.dev.env`;

// console.log('__dirname', path.join(__dirname, '../../environments/'));
// console.log('pathConfig', pathConfig);

dotenv.config({
  path: pathConfig,
});

const Config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/../migrations/*{.ts,.js}"],
  synchronize: false,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
}

export const AppDataSource: DataSource = new DataSource(Config);