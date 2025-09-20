import { Type } from 'class-transformer';
import { Product } from '../entities';
import { ApiProperty } from '@nestjs/swagger';

export class FindAllResponseProductsDto {
  @Type(() => Number)
  @ApiProperty({ example: 10 })
  totalRows: number;

  @ApiProperty({ example: '[{name}]' })
  data: Product[];
}
