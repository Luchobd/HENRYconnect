import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { JwtPayloadWithRefreshToken } from '@utils/types/jwt.type';

export const GetCurrentUser = createParamDecorator(
  (
    data: Undefined<keyof JwtPayloadWithRefreshToken>,
    context: ExecutionContext,
  ) => {
    const request = context.switchToHttp().getRequest();

    if (!data) return request.user;

    return request.user[data];
  },
);
