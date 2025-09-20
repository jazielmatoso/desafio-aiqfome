import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientsService } from '@clients/clients.service';
import { AuthLoginDto, AuthLoginResponseDto } from './dto';

@Injectable()
export class AuthService {
  public constructor(
    @Inject(ClientsService) protected clientsService: ClientsService,
    protected jwtService: JwtService,
  ) {}

  public async signIn(
    credentials: AuthLoginDto,
  ): Promise<AuthLoginResponseDto> {
    const { email } = credentials;

    const client = await this.clientsService.login(credentials);

    if (!client) {
      throw new UnauthorizedException();
    }

    const authPayload = { sub: client.id, email };

    const accessToken = await this.jwtService.signAsync(authPayload);

    return {
      client,
      accessToken,
    };
  }
}
