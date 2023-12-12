import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEmployeeDto {
    @ApiProperty({
        description: 'This field represents the employee_UUID',
      })
      @IsString()
      public employee_UUID: string;
    
      @ApiProperty({
        description: 'This field represents the humanInformation_UUID',
      })
      @IsString()
      public humanInformation_UUID: string;

      @ApiProperty({
        description: 'This field represents the mail_address',
      })
      @IsString()
      public mail_address: string;

      @ApiProperty({
        description: 'This field represents the password',
      })
      @IsString()
      public password: string;
}
