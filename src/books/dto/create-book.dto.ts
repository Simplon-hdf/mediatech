import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsInt, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    description: 'name',
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: 'description',
  })
  @IsString()
  public description: string;

@ApiProperty({
    description: 'author_UUID',
  })
  @IsString()
  public author_UUID: string;

@ApiProperty({
    description: 'borrow_UUID',
  })
  @IsString()
  public borrow_UUID: string;
}