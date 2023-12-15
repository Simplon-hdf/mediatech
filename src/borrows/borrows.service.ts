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

  public async create(createBorrowDto: CreateBorrowDto) {
    const createdBorrow = await this.prisma.borrows.create ({
        data: {
          status: createBorrowDto.status,
          end_at: createBorrowDto.end_at,
          employee_UUID: createBorrowDto.employee_UUID,
          borrower_UUID: createBorrowDto.borrower_UUID,    
        },
      });
    return new NormalizedResponse(`Borrow ${createBorrowDto.borrower_UUID } has been created`, createdBorrow).toJSON();
  }

  public async updateByUUID(uuid: string, updateBorrowDto: UpdateBorrowDto) {
    const updatedBorrow = await this.prisma.borrows.update({
      where: {
        borrow_UUID: uuid,
      },
      data: {
        borrow_UUID: updateBorrowDto.borrow_UUID,
        status: updateBorrowDto.status,
        end_at: updateBorrowDto.end_at,
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
