import { ForbiddenException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { JwtPayloadWithRefreshToken } from '@utils/types/jwt.type';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'refresh-token-secret',
      passReqToCallback: true,
    });
  }

  validate(
    req: Request,
    { sub, profileId, ...payload }: any,
  ): JwtPayloadWithRefreshToken {
    const refreshToken = req.get('authorization')?.replace('Bearer', '').trim();

    if (!refreshToken) throw new ForbiddenException('Refresh token malformed');

    return {
      donorId: sub,
      profileId: profileId,
      ...payload,
      refreshToken,
    };
  }
}
