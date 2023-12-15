import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty({
    description: 'This field represents the first_name',
    minLength: 5,
    maxLength: 20,
  })
  @IsString()
  public first_name: string;

  @ApiProperty({
    description: 'This field represents the last_name',
  })
  @IsString()
  public last_name: string;
}
