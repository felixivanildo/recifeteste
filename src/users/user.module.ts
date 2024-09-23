import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities/Users'; // Ajuste o caminho conforme necessário
import { UserService } from './user.service';
import { UsersController } from '../users/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UserService],
  controllers: [UsersController],
  exports: [UserService, TypeOrmModule], // Opcional: para usar o serviço em outros módulos
})
export class UserModule {}