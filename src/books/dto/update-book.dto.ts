import { IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsOptional()
    public name: string;
    @IsOptional()
    public description: string;
    @IsOptional()
    public author_UUID: string;
    @IsOptional()
    public borrow_UUID: string;
}
