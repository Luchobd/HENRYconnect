import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from '@modules/auth/auth.controller';
import { AuthService } from '@modules/auth/auth.service';
import { AccessTokenStrategy } from '@modules/auth/strategies/access-token.strategy';
import { RefreshTokenStrategy } from '@modules/auth/strategies/refresh-token.strategy';

// import { ProfileModule } from '../../modules/profile/profile.module';
@Module({
  imports: [JwtModule.register({})],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
