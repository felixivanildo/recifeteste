import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly configService: ConfigService,
    @Inject('AUTH_SERVICE') private readonly authservice: AuthService
  ) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get<string>('GOOGLE_AUTH_SECRET'),
      callbackURL: configService.get<string>('CALLBACK_URL'),
      scope: ['email', 'profile'],
    });
  }

  // The validate method is required and should be implemented
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<any> {


    console.log(profile)
    const user = await this.authservice.validateUser({email: profile.emails[0].value, name: profile.displayName,})

  
    return user || null;
  }
}
