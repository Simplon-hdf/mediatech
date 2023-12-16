import { PartialType } from '@nestjs/swagger';
import { CreateBorrowDto } from './create-borrow.dto';
import { IsOptional } from 'class-validator';


export class UpdateBorrowDto extends PartialType(CreateBorrowDto) {
}
