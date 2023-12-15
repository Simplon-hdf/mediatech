import { Injectable } from '@nestjs/common';
import { CreateHumanInformationDto } from './dto/create-human-information.dto';
import { UpdateHumanInformationDto } from './dto/update-human-information.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class HumanInformationsService {
  constructor(private prisma: PrismaService) {}

  public async getByUUID(uuid: string) {
    const gettedUser = new NormalizedResponse(
      `HumanInformation ${uuid} has been found`,
      await this.prisma.humanInformations.findUnique({
        where: {
          humanInformation_UUID: uuid,
        },
      }),
    );
    return gettedUser.toJSON();
  }

  public async create(createHumanInformationDto: CreateHumanInformationDto) {
    const createdAuthor = new NormalizedResponse(
      `HumanInformation ${createHumanInformationDto.first_name + " " + createHumanInformationDto.last_name} has been created`,
      await this.prisma.humanInformations.create({
        data: {
          first_name: createHumanInformationDto.first_name,
          last_name: createHumanInformationDto.last_name,
        },
      }),
    );
    return createdAuthor.toJSON();
  }

  public async updateByUUID(uuid: string, updateHumanInformationDto: UpdateHumanInformationDto) {
    return new NormalizedResponse(
      `HumanInformation ${updateHumanInformationDto.humanInformation_UUID} has been updated`,
      await this.prisma.humanInformations.update({
        where: {
          humanInformation_UUID: uuid,
        },
        data: {
          humanInformation_UUID: updateHumanInformationDto.humanInformation_UUID,
          first_name: updateHumanInformationDto.first_name,
          last_name: updateHumanInformationDto.last_name,
        },
      }),
    ).toJSON();
  }

  public async deleteByUUID(uuid: string) {
    const deletedUser = new NormalizedResponse(
      `User ${uuid} has been deleted`,
      await this.prisma.humanInformations.delete({
        where: {
          humanInformation_UUID: uuid,
        },
      }),
    );
    return deletedUser.toJSON();
  }

  findAll() {
    return `This action returns all humanInformations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} humanInformation`;
  }

}
