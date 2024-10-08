import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1678901234567 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
     CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255),
  status TEXT CHECK(status IN ('ativo', 'inativo')) DEFAULT 'ativo',
  role TEXT CHECK(role IN ('admin', 'user')) DEFAULT 'user'
)

    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users`);
    }
}