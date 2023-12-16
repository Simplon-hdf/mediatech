import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeDto } from './create-employee.dto';
import { IsOptional } from 'class-validator';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
}
