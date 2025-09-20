import { Type } from 'class-transformer';
import { Client } from '../entities';
import { ApiProperty } from '@nestjs/swagger';

export class FindAllResponseClientDto {
  @Type(() => Number)
  @ApiProperty({ example: 10 })
  totalRows: number;

  @ApiProperty({ example: '[{name}]' })
  data: Client[];
}
