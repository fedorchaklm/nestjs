import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @ApiProperty({ example: 'wood' })
  @IsString()
  @MinLength(4)
  type: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(10)
  @Max(100000)
  width: number;

  @ApiProperty({ example: 20 })
  @IsNumber()
  @Min(10)
  @Max(100000)
  height: number;

  @ApiProperty({ example: true })
  @IsOptional()
  inStock: boolean;
}
