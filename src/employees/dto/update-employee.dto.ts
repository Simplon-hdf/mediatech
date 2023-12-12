import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeDto } from './create-employee.dto';
import { IsOptional } from 'class-validator';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
    @IsOptional()
    public employee_UUID: string;
    @IsOptional()
    public humanInformation_UUID: string;
    @IsOptional()
    public mail_address: string;
    @IsOptional()
    public password: string;
}
