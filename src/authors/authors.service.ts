import { Body, Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';
import { CreateHumanInformationDto } from 'src/human-informations/dto/create-human-information.dto';
import { HumanInformation } from 'src/human-informations/entities/human-information.entity';

@Injectable()
export class AuthorsService {
  constructor(private readonly prisma: PrismaService) {}

  public async getByUUID(uuid: string) {
    const gettedUser = new NormalizedResponse(
      `Author ${uuid} has been found`,
      await this.prisma.authors.findUnique({
        where: {
          author_UUID: uuid,
        },
      }),
    );
    return gettedUser.toJSON();
  }

  public async create(createAuthorDto: CreateAuthorDto) {
    const createdAuthor = await this.prisma.authors.create({
        data: {
            humanInformation: {
                create: {
                    first_name: createAuthorDto.first_name,
                    last_name: createAuthorDto.last_name,
                },
            },
        },
    });
    return new NormalizedResponse(`Author ${createAuthorDto.first_name} has been created`, createdAuthor).toJSON();
 }

public async updateByUUID(uuid: string, updateAuthorDto: UpdateAuthorDto) {
  const author = await this.prisma.authors.update({
      data: {
        humanInformation: {
              update: {
                  first_name: updateAuthorDto.first_name,
                  last_name: updateAuthorDto.last_name,
              },
          },
      },
      where: {
        author_UUID: uuid,
      },
  });
  return new NormalizedResponse(`Author ${author} has been updated`, author).toJSON();
}


  public async deleteByUUID(uuid: string) {
    const deletedUser = new NormalizedResponse(
      `User ${uuid} has been deleted`,
      await this.prisma.authors.delete({
        where: {
          author_UUID: uuid,
        },
      }),
    );
    return deletedUser.toJSON();
  }

  findAll() {
    return `This action returns all authors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }
}
