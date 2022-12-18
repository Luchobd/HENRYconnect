import * as dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';

import { AccessTokenGuard } from '@guards/access-token.guard';
import { AuthModule } from '@modules/auth/auth.module';

const DB_URI = process.env.DB_URI!;

@Module({
  imports: [AuthModule, MongooseModule.forRoot(DB_URI)],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
