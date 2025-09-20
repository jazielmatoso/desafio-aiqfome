import { ConflictException } from '@nestjs/common';
import { getConstant } from '@src/constants';

export class ClientProductAlreadyExistsException extends ConflictException {
  constructor(message?: string) {
    super(message || getConstant().CLIENT.PRODUCT_ALREADY_EXISTS);
  }
}
