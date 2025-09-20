import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ example: 'Jose Araujo' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'some.png' })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ example: 12.5 })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 'some review' })
  @IsString()
  @IsNotEmpty()
  review: string;

  @ApiProperty({ example: 4 })
  @IsNumber()
  @IsOptional()
  apiId: number;

  @ApiProperty({ example: 'Jasdasd7*' })
  @IsNotEmpty()
  @MinLength(7)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{7,}$/)
  password: string;
}
