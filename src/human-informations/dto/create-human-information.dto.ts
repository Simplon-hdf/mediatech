import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateHumanInformationDto {
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
}
