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
    const createdBorrower = await this.prisma.borrowers.create({
        data: {
            humanInformation: {
                create: {
                    first_name: createBorrowerDto.first_name,
                    last_name: createBorrowerDto.last_name,
                },
            },
        },
    });

    return new NormalizedResponse(`Borrower ${createdBorrower} has been created`,createdBorrower).toJSON();
 }

  public async updateByUUID(uuid: string, updateBorrowerDto: UpdateBorrowerDto) {
    const borrower = await this.prisma.borrowers.update({
        data: {
          humanInformation: {
                update: {
                    first_name: updateBorrowerDto.first_name,
                    last_name: updateBorrowerDto.last_name,
                },
            },
        },
        where: {
          borrower_UUID: uuid,
        },
    });
  
    return new NormalizedResponse(`Borrower ${borrower} has been updated`,borrower).toJSON();
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
