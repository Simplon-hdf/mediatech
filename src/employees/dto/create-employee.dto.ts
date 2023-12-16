import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'This field represents the first_name',
    minLength: 3,
    maxLength: 20,
  })
  @IsString()
  public first_name: string;

  @ApiProperty({
    description: 'This field represents the last_name',
    minLength: 3,
    maxLength: 30,
  })
  @IsString()
  public last_name: string;

  @ApiProperty({
    description: 'This field represents the mail_address',
    minLength: 3,
    maxLength: 80,
  })
  @IsEmail()
  public mail_address: string;

  @ApiProperty({
    description: 'This field represents the password',
    minLength: 72,
    maxLength: 72,
  })
  @IsString()
  public password: string;
}
