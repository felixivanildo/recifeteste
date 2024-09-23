import { Controller, Post, Get, Req, Body, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'
import { AuthService } from 'src/auth/auth.service';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { UserService } from './user.service';
import { Request } from 'express';


@Controller('users')
export class UsersController {
    constructor(
         private readonly userService: UserService,
      ) {}

      @Get('consult')
      async findAll(@Req() request : Request): Promise<any> {
        if (request.user) {
        return this.userService.findAll();
        }
        return {"msg": 'User not allowed in this route'};
       
      }
 
}