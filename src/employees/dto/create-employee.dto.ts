import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'This field represents the first_name',
  })
  @IsString()
  public first_name: string;

  @ApiProperty({
    description: 'This field represents the last_name',
  })
  @IsString()
  public last_name: string;

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
