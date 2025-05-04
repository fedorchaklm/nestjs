import { Module } from '@nestjs/common';
import { TablesController } from './tables.controller';
import { TablesService } from './tables.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Table])],
  providers: [TablesService],
  controllers: [TablesController],
})
export class TablesModule {}
