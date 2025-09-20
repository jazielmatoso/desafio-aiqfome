import { NotFoundException } from '@nestjs/common';
import { getConstant } from '@src/constants';

export class ProductNotFoundException extends NotFoundException {
  constructor(message?: string) {
    super(message || getConstant().CLIENT.NOT_FOUND);
  }
}
