import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HumanInformationsService } from './human-informations.service';
import { CreateHumanInformationDto } from './dto/create-human-information.dto';
import { UpdateHumanInformationDto } from './dto/update-human-information.dto';

@Controller('human-informations')
export class HumanInformationsController {
  constructor(private readonly humanInformationsService: HumanInformationsService) { }

  @Post()
  create(@Body() createHumanInformationDto: CreateHumanInformationDto) {
    return this.humanInformationsService.create(createHumanInformationDto);
  }

  @Get()
  findAll() {
    return this.humanInformationsService.findAll();
  }

  @Get(':uuid')
  getByUUID(@Param('uuid') uuid: string) {
    return this.humanInformationsService.getByUUID(uuid);
  }

  @Patch(':uuid')
  updateByUUID(
    @Param('uuid') uuid: string,
    @Body() updateHumanInformationDto: UpdateHumanInformationDto,
  ) {
    return this.humanInformationsService.updateByUUID(uuid, updateHumanInformationDto);
  }

  @Delete(':uuid')
  deleteByUUID(@Param('uuid') uuid: string) {
    return this.humanInformationsService.deleteByUUID(uuid);
  }
}
