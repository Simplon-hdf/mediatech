import { PartialType } from '@nestjs/swagger';
import { CreateAuthorDto } from './create-author.dto';
import { IsOptional } from 'class-validator';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
  @IsOptional()
  public author_UUID: string;
  @IsOptional()
  public humanInformation_UUID: string;
  @IsOptional()
  public books: string;
}
