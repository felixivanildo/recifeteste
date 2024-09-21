import { Module } from '@nestjs/common';
import { authController } from './authController';

@Module({
    controllers: [authController],
    providers: [],
})
export class AuthModule {}
