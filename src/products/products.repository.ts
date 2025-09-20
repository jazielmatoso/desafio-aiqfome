import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppLogger } from '@src/shared/logger';
import { Repository } from 'typeorm';
import { Product } from '@products/entities';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(Product) private repository: Repository<Product>,
    private appLogger: AppLogger,
  ) {}

  async create(product: Product): Promise<Product> {
    try {
      return await this.repository.save<Product>(product);
    } catch (error) {
      this.appLogger.error(
        `[PRODUCTS][REPOSITORY][CREATE] Error to create an Product : ${JSON.stringify(error)}`,
      );
      throw error;
    }
  }

  async update(input: Product): Promise<void> {
    try {
      await this.repository.save(input);
    } catch (error) {
      this.appLogger.error(
        `[PRODUCTS][REPOSITORY][UPDATE] Error to update an Product : ${JSON.stringify(error)}`,
      );
      throw error;
    }
  }

  async getProductByApiId(apiId: number): Promise<Product | null> {
    return await this.repository.findOne({ where: { apiId } });
  }
}
