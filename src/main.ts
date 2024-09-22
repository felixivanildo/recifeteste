import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {  

  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  app.setGlobalPrefix('api')
  await app.listen(3010);
  app.use(session({
    secret: configService.get<string>('NEST_JS_SECRET')
  }))
}
bootstrap();
