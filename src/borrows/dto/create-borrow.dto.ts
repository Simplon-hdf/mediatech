import { IsString, Length, IsDate, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBorrowDto {
  @ApiProperty({
    description: 'This field represents the status',
  })
  @IsString()
  public status: string;

  @ApiProperty({
    description: 'This field represents the end_at',
  })
  @IsDateString()
  public end_at: string;

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

