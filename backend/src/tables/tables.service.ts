import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { UpdateTableDto } from './dto/update-table.dto';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}

  async create(createTableDto: CreateTableDto): Promise<Table> {
    const newTable = this.tableRepository.create(createTableDto);
    return this.tableRepository.save(newTable);
  }

  async findAll(): Promise<Table[]> {
    return this.tableRepository.find();
  }

  async findById(id: number): Promise<Table> {
    const table = await this.tableRepository.findOneBy({ id });
    if (!table) {
      throw new NotFoundException('Not Found table with such id');
    }
    return table;
  }

  async updateOne(
    id: number,
    updateTableDto: UpdateTableDto,
  ): Promise<Table | null> {
    await this.tableRepository.update(id, updateTableDto);
    const updatedTable = this.tableRepository.findOneBy({ id });
    if (updatedTable === null) {
      throw new NotFoundException('Not Found table with such id');
    }
    return updatedTable;
  }

  async deleteOne(id: number): Promise<void> {
    await this.tableRepository.delete(id);
  }
}
