import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname, './entities'],
  migrations: [__dirname, './migrations/*.ts'],
  synchronize: false
});
