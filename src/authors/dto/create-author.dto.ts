import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty({
    description: 'This field represents the humanInformation_UUID',
  })
  @IsString()
  public humanInformation_UUID: string;
}
