import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsInt, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    description: "This field represents the book's name",
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: "This field represents the book's description",
  })
  @IsString()
  public description: string;

@ApiProperty({
  description: "This field represents the book's author_UUID",
  })
  @IsString()
  @IsOptional()
  public author_UUID: string;

@ApiProperty({
  description: "This field represents the book's borrow_UUID",
  })
  @IsString()
  @IsOptional()
  public borrow_UUID: string;
}
