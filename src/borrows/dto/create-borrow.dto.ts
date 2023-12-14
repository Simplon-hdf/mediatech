import { IsString, Length, IsDate, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBorrowDto {
  @ApiProperty({
    description: 'This field represents the status',
  })
  @IsNumber()
  public status: number;

  @ApiProperty({
    description: 'This field represents the end_at',
  })
  @IsDateString()
  public end_at: Date;

  @ApiProperty({
    description: 'This field represents the employee_UUID',
  })
  @IsString()
  public employee_UUID: string;

  @ApiProperty({
    description: 'This field represents the borrower_UUID',
  })
  @IsString()
  public borrower_UUID: string;

}

