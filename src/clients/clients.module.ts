import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '@shared/logger';
//import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { Client } from './entities/client.entity';
import { ClientsService } from './clients.service';
import { ClientsRepository } from './clients.repository';
import { ClientsController } from './clients.controller';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([Client]), LoggerModule, ProductsModule],
  providers: [ClientsRepository, ClientsService],
  exports: [ClientsService],
  controllers: [ClientsController],
})
export class ClientsModule {}
