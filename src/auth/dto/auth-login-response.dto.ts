import { Client } from '@clients/entities';

export class AuthLoginResponseDto {
  client: Client;
  accessToken: string;
}
