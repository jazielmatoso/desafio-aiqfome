import { Module } from '@nestjs/common';
import { ClientsModule } from '@clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Client } from '@clients/entities';
import { AuthModule } from '@auth/auth.module';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [Client, Product],
        synchronize: true,
      }),
    }),
    ClientsModule,
    ProductsModule,
    AuthModule,
  ],
})
export class AppModule {}
