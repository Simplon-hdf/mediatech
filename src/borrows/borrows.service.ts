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
    const createdBorrow = await this.prisma.borrows.create({
      data: {
        end_at: createBorrowDto.end_at,
        employee_UUID: createBorrowDto.employee_UUID,
        borrower_UUID: createBorrowDto.borrower_UUID,
      },
    });

    return new NormalizedResponse(`Borrow with UUID ${createdBorrow.borrow_UUID} created`, createdBorrow).toJSON();
  }

  public async updateByUUID(uuid: string, updateBorrowDto: UpdateBorrowDto) {
    const updatedBorrow = await this.prisma.borrows.update({
      where: {
        borrow_UUID: uuid,
      },
      data: {
        end_at: updateBorrowDto.end_at,
        employee_UUID: updateBorrowDto.employee_UUID,
      },
    });

    return new NormalizedResponse(`Borrow with UUID ${uuid} updated`, updatedBorrow).toJSON();
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

  findOne(id: number) {
    return `This action returns a #${id} borrow`;
  }
}
