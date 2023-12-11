import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty({
    description: 'This field represents the author_UUID',
  })
  @IsString()
  public author_UUID: string;

  @ApiProperty({
    description: 'This field represents the humanInformation',
  })
  @IsString()
  public humanInformation: string;

  @ApiProperty({
    description: 'This field represents the humanInformation_UUID',
  })
  @IsString()
  public humanInformation_UUID: string;

  @ApiProperty({
    description: 'This field represents the books',
  })
  @IsString()
  public books: string;
}
