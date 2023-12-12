import { IsString, Length, IsDate } from 'class-validator';

export class CreateBorrowDto {
  @IsDate()
  public end_at: Date;

  @IsString()
  @Length(7, 30)
  public employee_UUID : string;

  @IsString()
  @Length(8, 140)
  public  borrower_UUID: string;

}

