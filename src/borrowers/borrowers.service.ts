import { Injectable } from '@nestjs/common';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class BorrowersService {
constructor(private prisma: PrismaService) {}

  public async getByUUID(uuid: string) {
    const gettedUser = new NormalizedResponse(
      `Borrower ${uuid} has been found`,
      await this.prisma.borrowers.findUnique({
        where: {
          borrower_UUID: uuid,
        },
      }),
    );
    return gettedUser.toJSON();
  }

  public async create(createBorrowerDto: CreateBorrowerDto) {
    const createdBorrower = new NormalizedResponse(
      `Author ${createBorrowerDto} has been created`,
      await this.prisma.borrowers.create({
        data: {
          humanInformation_UUID: createBorrowerDto.humanInformation_UUID,
        },
      }),
    );
    return createdBorrower.toJSON();
  }

  public async updateByUUID(uuid: string, updateBorrowerDto: UpdateBorrowerDto) {
    return new NormalizedResponse(
      `Author ${updateBorrowerDto.borrower_UUID} has been updated`,
      await this.prisma.borrowers.update({
        where: {
          borrower_UUID: uuid,
        },
        data: {
          borrower_UUID: updateBorrowerDto.borrower_UUID,
          humanInformation_UUID: updateBorrowerDto.humanInformation_UUID,
        },
      }),
    ).toJSON();
  }

  public async deleteByUUID(uuid: string) {
    const deletedUser = new NormalizedResponse(
      `User ${uuid} has been deleted`,
      await this.prisma.borrowers.delete({
        where: {
          borrower_UUID: uuid,
        },
      }),
    );
    return deletedUser.toJSON();
  }


  findAll() {
    return `This action returns all borrowers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} borrower`;
  }
}
