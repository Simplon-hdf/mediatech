import { Injectable } from '@nestjs/common';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class BorrowsService {
  constructor(private prisma: PrismaService) {}
  public async getByUUID(uuid: string) {
    const borrowedItem = await this.prisma.borrows.findUnique({
      where: {
        borrow_UUID: uuid,
      },
    });
    return new NormalizedResponse(`Borrow with UUID ${uuid} found`, borrowedItem).toJSON();
  }

  public async create(createBorrowDto: CreateBorrowDto) {
  
    const end_At = new Date();
    end_At.setDate(end_At.getDate() + 7);


    const createdBorrow = await this.prisma.borrows.create ({
      data: {
        end_at: end_At,
        status: 1,
        employee: {
          connect: {
            employee_UUID: createBorrowDto.employee_UUID,
          },
        },
        borrower: {
          connect: {
            borrower_UUID: createBorrowDto.borrower_UUID,
          },
        },
      },
      });
    return new NormalizedResponse(`Borrow ${createBorrowDto.borrower_UUID } has been created`, createdBorrow).toJSON();
  }

  public async getByBorrowUUID(uuid: string) {
    return new NormalizedResponse(
      `Borrow for '${uuid}' uuid has been found`,
      await this.prisma.borrows.findUnique({
        where: {
          borrow_UUID: uuid,
        },
      }),
    ).toJSON();
  }

  public async getByEmployeeUUID(uuid: string) {
    return new NormalizedResponse(
      `Borrow for '${uuid}' uuid has been found`,
      await this.prisma.employees.findUnique({
        where: {
          employee_UUID: uuid,
        },
        include: {
          borrows: true,
        }
      }),
    ).toJSON();
  }

  public async getByBorrowerUUID(uuid: string) {
    return new NormalizedResponse(
      `Borrow for '${uuid}' uuid has been found`,
      await this.prisma.borrowers.findUnique({
        where: {
          borrower_UUID: uuid,
        },
        include: {
          borrows: true,
        }
      }),
    ).toJSON();
  }

  public async updateByUUID(uuid: string, updateBorrowDto: UpdateBorrowDto) {

    const end_At = new Date();
    end_At.setDate(end_At.getDate() + 7);
    const updatedBorrow = await this.prisma.borrows.update({
      where: {
        borrow_UUID: uuid,
      },
      data: {
        status: 1,
        end_at: end_At,
      },
    });
    return new NormalizedResponse(`Borrow with UUID ${updateBorrowDto.borrower_UUID} has been updated`, updatedBorrow).toJSON();
  }

  public async deleteByUUID(uuid: string) {
    const deletedBorrow = await this.prisma.borrows.delete({
      where: {
        borrow_UUID: uuid,
      },
    });
    return new NormalizedResponse(`Borrow with UUID ${uuid} deleted`, deletedBorrow).toJSON();
  }

  findAll() {
    return `This action returns all borrows`;
  }

}
