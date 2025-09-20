import { ConflictException } from '@nestjs/common';
import { getConstant } from '@src/constants';

export class EmailClientAlreadyExistsException extends ConflictException {
  constructor(message?: string) {
    super(message || getConstant().CLIENT.EMAIL_ALREADY_EXISTS);
  }
}
