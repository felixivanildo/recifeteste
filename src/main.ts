import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {  
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
    
  app.use(session({
    secret: configService.get<string>('NEST_JS_SECRET'),
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 600000 },
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.setGlobalPrefix('api');
  await app.listen(3010);
}

bootstrap();
