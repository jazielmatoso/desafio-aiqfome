import { Module } from '@nestjs/common';
import { LoggerModule } from '@shared/logger';

//import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { Product } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), LoggerModule],
  providers: [ProductsService, ProductsRepository],
  exports: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
