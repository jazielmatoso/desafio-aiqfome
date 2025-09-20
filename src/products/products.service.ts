import { Inject, Injectable } from '@nestjs/common';
import { Product } from './entities';

import { parseProductListApiToProductList } from '@products/helpers/parser.helper';
import { FindAllResponseProductsDto } from '@products/dto';
import { ProductsRepository } from './products.repository';
import ProductsApiAdapter from '@adapters/products/products-api';
import { ProductStoreApi } from '@adapters/products/types';

@Injectable()
export class ProductsService {
  public constructor(
    @Inject(ProductsRepository)
    protected productsRepository: ProductsRepository,
  ) {}

  public async create(input: Product): Promise<Product> {
    return await this.productsRepository.create(input);
  }

  public async findAll(): Promise<FindAllResponseProductsDto> {
    const apiProductResponse: ProductStoreApi[] =
      await ProductsApiAdapter.getAllProducts();

    const parsedResponse: Product[] =
      parseProductListApiToProductList(apiProductResponse);

    return {
      data: parsedResponse,
      totalRows: parsedResponse.length,
    };
  }

  public async findOne(apiId: number): Promise<Product | null> {
    return await this.productsRepository.getProductByApiId(apiId);
  }
}
