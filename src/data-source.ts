import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname, './entities'],
  migrations: [__dirname, 'src/migrations/*.ts'],
  synchronize: false
});
