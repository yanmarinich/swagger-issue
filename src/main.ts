import { json } from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './config/setupSwagger';

const SERVER_PORT = 3333;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({ credentials: true, origin: 'http://localhost:3000' });
  setupSwagger(app);
  await app.listen(SERVER_PORT);
}
bootstrap();
