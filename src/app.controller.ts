import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleAuthGuard } from './auth/utilities/Guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()  
  getHello(): string {
    return this.appService.getHello();
  }
}
