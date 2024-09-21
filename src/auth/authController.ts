import { Controller, Get } from "@nestjs/common";

@Controller('auth')
export class authController
{
    @Get('oauth/login')
    handleLogin(){
        return  {message: "Google Authenticated"}
    }


    @Get('google/redirect')
    handleLoginRedirect() {
        return {message: 'Ok'}
    }
}