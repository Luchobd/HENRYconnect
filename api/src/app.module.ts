import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { MongooseModule } from '@nestjs/mongoose';

import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from '@guards/access-token.guard';

import { AuthModule } from '@modules/auth/auth.module';

@Module({
  imports: [AuthModule, MongooseModule.forRoot(process.env.DB_URI)],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
