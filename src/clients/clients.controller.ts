import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  Version,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ClientsService } from '@clients/clients.service';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import {
  AddProductFavoriteDto,
  CreateClientDto,
  FindAllClientsDto,
  UpdateClientDto,
} from './dto';
import { Public } from '@auth/constants';

@Controller('clients')
@UseGuards(JwtAuthGuard)
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Post()
  @Version('1')
  @ApiResponse({ status: HttpStatus.CREATED })
  @Public()
  async create(@Body() data: CreateClientDto): Promise<void> {
    await this.clientsService.create(data);
  }

  @Get(':id')
  @Version('1')
  @ApiResponse({ status: HttpStatus.OK })
  async findOne(@Param('id') id: number): Promise<any> {
    return await this.clientsService.findOne(id);
  }

  @Get()
  @Version('1')
  @ApiResponse({ status: HttpStatus.OK })
  async findAll(@Query() inputs: FindAllClientsDto): Promise<any> {
    return await this.clientsService.findAll(inputs);
  }

  @Put(':id')
  @Version('1')
  @ApiResponse({ status: HttpStatus.OK })
  async update(
    @Param('id') id: number,
    @Body() input: UpdateClientDto,
  ): Promise<void> {
    await this.clientsService.update(id, input);
  }

  @Delete(':id')
  @Version('1')
  @ApiResponse({ status: HttpStatus.OK })
  async delete(@Param('id') id: number): Promise<void> {
    await this.clientsService.delete(id);
  }

  @Post(':id/favorites')
  @Version('1')
  @ApiResponse({ status: HttpStatus.CREATED })
  async favorites(
    @Param('id') id: number,
    @Body() data: AddProductFavoriteDto,
  ): Promise<void> {
    await this.clientsService.addProductFavorite(id, data);
  }
}
