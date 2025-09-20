import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class UpdateClientDto {
  @ApiProperty({ example: 'Jose Araujo' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'email@email.com' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Jasdasd7*' })
  @IsOptional()
  @MinLength(7)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{7,}$/)
  password?: string;

  @ApiProperty({ example: '(81) 98754-8754' })
  @IsString()
  @IsOptional()
  phone?: string;
}
