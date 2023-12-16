import { PartialType } from '@nestjs/swagger';
import { CreateHumanInformationDto } from './create-human-information.dto';
import { IsOptional } from 'class-validator';

export class UpdateHumanInformationDto extends PartialType(CreateHumanInformationDto) {
}




