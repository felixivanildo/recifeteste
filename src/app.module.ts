import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Users } from './entities/Users';

@Module({
  imports: [TypeOrmModule.forRoot(
    { type: 'sqlite',
      database:'database.sqlite',
      entities: [Users],
      migrations: [__dirname, './migrations/*.ts'],
      synchronize: false
    }
  ) ,AuthModule, ConfigModule.forRoot({isGlobal: true}),
    PassportModule.register({session: true})
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
