import { Inject, Injectable } from '@nestjs/common';
import {
  AddProductFavoriteDto,
  CreateClientDto,
  FindAllClientsDto,
} from '@clients/dto';
import { ClientsRepository } from '@clients/clients.repository';
import { UpdateClientDto } from './dto/update-client.dto';
import { AuthLoginDto } from '@auth/dto/auth-login.dto';
import { Client } from './entities';
import { FindAllResponseClientDto } from './dto/find-all-response-client.dto';
import { ClientNotFoundException } from './exceptions';
import { EmailClientAlreadyExistsException } from './exceptions/email-client-already-exists-exception';
import { ProductsService } from '@products/products.service';
import { ProductNotFoundException } from '@products/exceptions';
import ProductsApiAdapter from '@adapters/products/products-api';
import { ClientProductAlreadyExistsException } from './exceptions/client-product-altready-exists-exception';
import { parseProductApiToProduct } from '../products/helpers/parser.helper';
import { compare, generateHash } from '@shared/bcrypt';

@Injectable()
export class ClientsService {
  public constructor(
    @Inject(ClientsRepository) protected clientsRepository: ClientsRepository,
    @Inject(ProductsService) protected productsService: ProductsService,
  ) {}

  public async create(client: CreateClientDto): Promise<void> {
    if (await this.clientsRepository.getClientByEmail(client.email)) {
      throw new EmailClientAlreadyExistsException();
    }

    client.password = await generateHash(client.password);

    await this.clientsRepository.create(client);
  }

  public async update(id: number, input: UpdateClientDto): Promise<void> {
    const clientExists = await this.clientsRepository.getClientById(id);

    if (!clientExists) throw new ClientNotFoundException();

    clientExists.updatedAt = new Date().toISOString();

    await this.clientsRepository.update({ ...clientExists, ...input });
  }

  public async findAll(
    findAllDto: FindAllClientsDto,
  ): Promise<FindAllResponseClientDto> {
    return {
      data: await this.clientsRepository.findAll(findAllDto),
      totalRows: await this.clientsRepository.getCountAll(findAllDto.term),
    };
  }

  public async delete(id: number) {
    await this.clientsRepository.delete(id);
  }

  public async findOne(id: number): Promise<any> {
    return await this.clientsRepository.findOne(id);
  }

  async login(credentials: AuthLoginDto): Promise<Client | null> {
    const clientExists = await this.clientsRepository.getClientByEmail(
      credentials.email,
    );

    if (!clientExists) {
      return null;
    }

    if (!(await compare(credentials.password, clientExists.password))) {
      return null;
    }

    return clientExists;
  }

  async addProductFavorite(
    id: number,
    input: AddProductFavoriteDto,
  ): Promise<void> {
    const client = await this.clientsRepository.findOne(id);
    if (!client) {
      throw new ClientNotFoundException();
    }

    if (await this.clientsRepository.clientHasProduct(id, input.productId)) {
      throw new ClientProductAlreadyExistsException();
    }

    const productApi = await ProductsApiAdapter.getProductById(input.productId);
    if (!productApi) {
      throw new ProductNotFoundException();
    }

    let product = await this.productsService.findOne(input.productId);
    if (!product) {
      product = await this.productsService.create(
        parseProductApiToProduct(productApi),
      );
    }

    client.products?.push(product);
    await this.clientsRepository.update(client);
  }
}
