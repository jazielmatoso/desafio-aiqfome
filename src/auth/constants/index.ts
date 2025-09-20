import { SetMetadata } from '@nestjs/common';

export const JWT = {
  secret: '04e5a146b61501561403a38843933392f2302d37724d0840466ad7ff66479e82',
  signOptions: { expiresIn: '7d' },
};

export const IS_PUBLIC_KEY = 'isPublic';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
