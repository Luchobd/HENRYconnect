import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.setGlobalPrefix('api');
  // app.enableVersioning({
  //   type: VersioningType.HEADER,
  //   header: 'Api-Version',
  //   defaultVersion: '1.0',
  // });
  await app.listen(3000);
}
bootstrap();
