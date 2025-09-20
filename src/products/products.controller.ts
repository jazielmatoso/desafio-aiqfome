import {
  Controller,
  Get,
  HttpStatus,
  UseGuards,
  Version,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { FindAllResponseProductsDto } from './dto';
import { ProductsService } from './products.service';

@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @Version('1')
  @ApiResponse({ status: HttpStatus.OK })
  async findAll(): Promise<FindAllResponseProductsDto> {
    return await this.productsService.findAll();
  }
}
