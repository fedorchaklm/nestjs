import { Module } from '@nestjs/common';
import { TablesModule } from './tables/tables.module';
import { TypeormModule } from './typeorm.module';

@Module({
  imports: [TypeormModule, TablesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
