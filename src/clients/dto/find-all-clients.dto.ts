import { ApiProperty } from '@nestjs/swagger';
import { DEFAULT_LIMIT, DEFAULT_PAGE_NUMBER } from '@src/constants/pagination';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class FindAllClientsDto {
  @Type(() => Number)
  @ApiProperty({ example: 1 })
  @IsPositive()
  @IsOptional()
  @IsInt()
  page: number = DEFAULT_PAGE_NUMBER;

  @Type(() => Number)
  @ApiProperty({ example: 10 })
  @IsPositive()
  @IsOptional()
  @IsInt()
  limit: number = DEFAULT_LIMIT;

  @ApiProperty({ example: 'word for search' })
  @IsString()
  @IsOptional()
  term?: string;
}
