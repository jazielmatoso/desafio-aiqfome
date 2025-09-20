import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Version,
  Request,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { getConstant } from '@src/constants';
import { AuthService } from './auth.service';
import { AuthLoginDto, AuthLoginResponseDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @Version('1')
  @ApiOperation({
    summary: getConstant().DOCS.AUTH_LOGIN_SUMMARY,
    description: getConstant().DOCS.AUTH_LOGIN_DESCRIPTION,
  })
  @ApiResponse({ status: HttpStatus.OK, type: AuthLoginResponseDto })
  async singIn(
    @Body() authLoginDto: AuthLoginDto,
  ): Promise<AuthLoginResponseDto> {
    return await this.authService.signIn(authLoginDto);
  }

  @Post('logout')
  @Version('1')
  @ApiOperation({
    summary: getConstant().DOCS.AUTH_LOGOUT_SUMMARY,
    description: getConstant().DOCS.AUTH_LOGOUT_DESCRIPTION,
  })
  @ApiResponse({ status: HttpStatus.OK })
  async singOut(@Request() req): Promise<AuthLoginResponseDto> {
    return req.logout();
  }
}
