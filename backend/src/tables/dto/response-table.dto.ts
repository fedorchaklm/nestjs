import { ApiProperty } from '@nestjs/swagger';

export class ResponseTableDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'wood' })
  type: string;

  @ApiProperty({ example: 10 })
  width: number;

  @ApiProperty({ example: 20 })
  height: number;

  @ApiProperty({ example: true })
  inStock: boolean;
}
