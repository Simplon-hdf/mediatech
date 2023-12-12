import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

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
    const createdAuthor = new NormalizedResponse(
      `Author ${createAuthorDto} has been created`,
      await this.prisma.authors.create({
        data: {
          humanInformation_UUID: createAuthorDto.humanInformation_UUID,
        },
      }),
    );
    return createdAuthor.toJSON();
  }

  public async updateByUUID(uuid: string, updateAuthorDto: UpdateAuthorDto) {
    return new NormalizedResponse(
      `Author ${updateAuthorDto.author_UUID} has been updated`,
      await this.prisma.authors.update({
        where: {
          author_UUID: uuid,
        },
        data: {
          author_UUID: updateAuthorDto.author_UUID,
          humanInformation_UUID: updateAuthorDto.humanInformation_UUID,
        },
      }),
    ).toJSON();
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
