import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsInt, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    description: "This field represents the book's name",
    minLength: 3,
    maxLength: 40,
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: "This field represents the book's description",
    minLength: 1,
    maxLength: 500,
  })
  @IsString()
  public description: string;

@ApiProperty({
  description: "This field represents the book's author_UUID",
  })
  @IsString()
  public author_UUID: string;

@ApiProperty({
  description: "This field represents the book's borrow_UUID",
  })
  @IsString()
  public borrow_UUID: string;
}
