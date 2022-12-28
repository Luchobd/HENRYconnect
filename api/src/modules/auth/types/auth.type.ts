import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class AuthTokens {
  @ApiProperty({
    example: '--hash--',
    type: String,
    description: 'Access token',
  })
  access_token: string;

  @ApiProperty({
    example: '--hash--',
    type: String,
    description: 'Refresh token',
  })
  refresh_token: string;

  @ApiProperty()
  user: any;
}

export type GenerateAuthTokensParams = {
  userId: Types.ObjectId;
  user: any;
};

export type UpdateRtHashParams = {
  userId: Types.ObjectId;
  refreshToken: string;
};

export type RefreshTokensParams = {
  userId: Types.ObjectId;
  refreshToken: string;
};
