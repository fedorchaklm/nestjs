import { Module } from '@nestjs/common';
import { TablesModule } from './tables/tables.module';
import { TypeormModule } from './typeorm.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), TypeormModule, TablesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
