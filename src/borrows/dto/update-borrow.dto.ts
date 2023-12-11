import { PartialType } from '@nestjs/swagger';
import { CreateBorrowDto } from './create-borrow.dto';
import { IsOptional } from 'class-validator';


export class UpdateBorrowDto extends PartialType(CreateBorrowDto) {
  @IsOptional()
  public borrow_UUID  ?: string;

  @IsOptional()
  public end_at?: Date;

  @IsOptional()
  public employee_UUID?: string;
}
