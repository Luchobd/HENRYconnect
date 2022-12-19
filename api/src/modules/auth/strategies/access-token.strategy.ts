import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { JwtPayload } from '@utils/types/jwt.type';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'access-token-secret',
    });
  }

  validate({ sub, profileId, ...payload }: any): JwtPayload {
    return {
      userId: sub,
      profileId: profileId,
      ...payload,
    };
  }
}
