import { Injectable } from '@nestjs/common';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

// @Injectable()
// export class BorrowsService {
//   create(createBorrowDto: CreateBorrowDto) {
//     return 'This action adds a new borrow';
//   }

//   findAll() {
//     return `This action returns all borrows`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} borrow`;
//   }

//   update(id: number, updateBorrowDto: UpdateBorrowDto) {
//     return `This action updates a #${id} borrow`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} borrow`;
//   }
//}
@Injectable()
export class UsersService {
  private saltGenRound = 12;

  constructor(private readonly prisma: PrismaService) {}

  public async create(createBorrowDt: CreateBorrowDto) {
    return await this.prisma.borrows.create({
      data: {
        nickname: createBorrowDto.nickname,
        username: createBorrowDto.username,
        password: await bcrypt.hash(createBorrowDt.password, this.saltGenRound),
      },
    });
  }

  public async getByUUID(uuid: string) {
    return await this.prisma.borrows.findUnique({
      where: {
        UUID: uuid,
      },
    });
  }

  public async updateByUUID(uuid: string, updateBorrowsDto: UpdateBorrowDto) {
    return await this.prisma.borrows.update({
      where: {
        UUID: uuid,
      },
      data: {
        nickname: createBorrowDto.nickname,
        username: updateBorrowDto.username,
        password: await bcrypt.hash(updateBorrowDto.password, this.saltGenRound),
      },
    });
  }

  public async deleteByUUID(uuid: string) {
    return await this.prisma.borrows.delete({
      where: {
        UUID: uuid,
      },
    });
  }
}