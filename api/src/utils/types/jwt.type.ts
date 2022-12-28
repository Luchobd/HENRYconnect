export type JwtPayload = {
  userId: string;
  email: string;
  username: string;
};

export type JwtPayloadWithRefreshToken = JwtPayload & {
  refreshToken: Undefined<string>;
};
