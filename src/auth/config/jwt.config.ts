import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { JWT } from '@auth/constants';

export const jwtConfig = registerAs(
  'jwt',
  (): JwtModuleOptions => ({
    secret: JWT.secret,
    signOptions: JWT.signOptions,
  }),
);
