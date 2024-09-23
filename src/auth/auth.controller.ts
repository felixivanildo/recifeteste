import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { GoogleAuthGuard } from "./utilities/Guards";

@Controller('auth')
export class authController
{
    @Get('oauth/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin(){
        return  {message: "Google Authenticated"}
    }


    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    handleLoginRedirect() {
        return {message: 'Ok'}
    }


    @Get('status')
    user(@Req() request: Request) {
      console.log(request.user);
      if (request.user) {
        return { msg: 'Authenticated' };
      } else {
        return { msg: 'Not Authenticated' };
      }
    }
}