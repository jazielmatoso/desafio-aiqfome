import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppLogger } from '@src/shared/logger';
import { Equal, Like, Repository } from 'typeorm';
import { CreateClientDto, FindAllClientsDto } from '@clients/dto';
import { Client } from '@clients/entities';
import { AuthLoginDto } from '../auth/dto';

@Injectable()
export class ClientsRepository {
  constructor(
    @InjectRepository(Client) private repository: Repository<Client>,
    private appLogger: AppLogger,
  ) {}

  async create(client: CreateClientDto): Promise<Client> {
    try {
      const createClient: Client = this.repository.create(client);
      return await this.repository.save<Client>(createClient);
    } catch (error) {
      this.appLogger.error(
        `[CLIENTS][REPOSITORY][CREATE] Error to create an client : ${JSON.stringify(error)}`,
      );
      throw error;
    }
  }

  async update(input: Client): Promise<void> {
    try {
      await this.repository.save(input);
    } catch (error) {
      this.appLogger.error(
        `[CLIENTS][REPOSITORY][UPDATE] Error to update an client : ${JSON.stringify(error)}`,
      );
      throw error;
    }
  }

  async getClientById(id: number): Promise<Client | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async getClientByEmail(email: string): Promise<Client | null> {
    return await this.repository.findOne({ where: { email } });
  }

  async getClientByCredentials(
    credentials: AuthLoginDto,
  ): Promise<Client | null> {
    return await this.repository.findOne({ where: credentials });
  }

  async findAll(input: FindAllClientsDto): Promise<Client[]> {
    const skip = (input.page - 1) * input.limit;

    return await this.repository.find({
      order: { id: 'DESC' },
      take: input.limit,
      skip,
    });
  }

  async findOne(id: number): Promise<Client | null> {
    return await this.repository.findOne({
      where: { id: Equal(id) },
      relations: ['products'],
    });
  }

  async getCountAll(term?: string): Promise<number> {
    let condition = {};
    if (term) {
      condition = { where: { name: Like(`${term}%`) } };
    }

    return await this.repository.count(condition);
  }

  async delete(id: number): Promise<void> {
    try {
      const findOne = await this.findOne(id);
      if (!findOne) return;

      await this.repository.remove([findOne]);
    } catch (error) {
      this.appLogger.error(
        `[CLIENTS][REPOSITORY][DELETE] Error to delete an client : ${JSON.stringify(error)}`,
      );
      throw error;
    }
  }

  public async clientHasProduct(
    clientId: number,
    productApiId: number,
  ): Promise<boolean> {
    const rows = await this.repository
      .createQueryBuilder('product')
      .innerJoin('client.product', 'client')
      .where('cliente.id = :clientId', { clientId })
      .andWhere('produto.apiId = :productApiId', { productApiId })
      .getOne();

    return !!rows;
  }
}
