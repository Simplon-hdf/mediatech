import { PartialType } from '@nestjs/swagger';
import { CreateBorrowerDto } from './create-borrower.dto';
import { IsOptional } from 'class-validator';

export class UpdateBorrowerDto extends PartialType(CreateBorrowerDto) {
}
