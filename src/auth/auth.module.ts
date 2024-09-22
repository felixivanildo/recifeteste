import { Module } from '@nestjs/common';
import { authController } from './auth.controller';
import { GoogleStrategy } from './utilities/GoogleStrategy';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users])
    ],
    controllers: [authController],
    providers: [GoogleStrategy, {provide: 'AUTH_SERVICE', useClass: AuthService }],
})
export class AuthModule {}
