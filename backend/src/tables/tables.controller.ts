import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { TablesService } from './tables.service';
import { UpdateTableDto } from './dto/update-table.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseTableDto } from './dto/response-table.dto';

@ApiTags('Tables')
@Controller('tables')
export class TablesController {
  constructor(private readonly tableService: TablesService) {}

  @ApiOperation({ summary: 'create new table' })
  @ApiResponse({
    status: 201,
    type: ResponseTableDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Failed to create new table',
  })
  @Post()
  async create(@Body() createTableDto: CreateTableDto): Promise<Table> {
    return await this.tableService.create(createTableDto);
  }

  @ApiOperation({ summary: 'get all tables' })
  @ApiResponse({
    status: 200,
    type: ResponseTableDto,
    isArray: true,
  })
  @Get()
  async getAll(): Promise<ResponseTableDto[]> {
    return await this.tableService.findAll();
  }

  @ApiOperation({ summary: 'get table by id' })
  @ApiResponse({
    status: 200,
    type: ResponseTableDto,
  })
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Table> {
    return this.tableService.findById(Number(id));
  }

  @ApiOperation({ summary: 'update table by id' })
  @ApiResponse({
    status: 200,
    type: ResponseTableDto,
  })
  @Patch(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateTableDto: UpdateTableDto,
  ): Promise<Table | null> {
    return this.tableService.updateOne(Number(id), updateTableDto);
  }

  @ApiOperation({ summary: 'delete table by id' })
  @ApiResponse({
    status: 204,
  })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return this.tableService.deleteOne(Number(id));
  }
}
