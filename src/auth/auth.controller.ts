import { Controller, Get, UseGuards } from "@nestjs/common";
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
}