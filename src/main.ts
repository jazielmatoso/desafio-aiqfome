import 'dotenv/config';

import express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigSwagger } from './libs/swagger';

async function bootstrap() {
  const server = express();

  const app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
    cors: true,
  });

  app.enableVersioning({ type: VersioningType.URI });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  new ConfigSwagger(app, {
    documentationEndpoint: process.env.DOCUMENTATION_ENDPOINT || '',
    documentationVersion: process.env.DOCUMENTATION_VERSION || '',
    projectDescription: process.env.PROJECT_DESCRIPTION || '',
    projectName: process.env.PROJECT_NAME || '',
  }).createDocument();

  await app.listen(3000);

  console.log();
}

bootstrap();
