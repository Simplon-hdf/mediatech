import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import NormalizedResponse from 'src/utils/normalized-response';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}
 
   public async create(createBookDto: CreateBookDto) {
    return new NormalizedResponse(
      `Book has been registered`,
      await this.prisma.books.create({
        data: {
          name: createBookDto.name,
          description: createBookDto.description,
          author_UUID: createBookDto.author_UUID,
          borrow_UUID: createBookDto.borrow_UUID
        },
      }),
    ).toJSON();
  }

  findAll() {
    return `This action returns all books`;
  }


    public async getByUUID(uuid: string) {
    return new NormalizedResponse(
      `Book for '${uuid}' uuid has been found`,
      await this.prisma.books.findUnique({
        where: {
          book_UUID: uuid,
        },
      }),
    ).toJSON();
  }

  public async updateByUUID(uuid: string, updateBookDto: UpdateBookDto) {
    return new NormalizedResponse(
      `Book for '${uuid}' uuid has been updated`,
      await this.prisma.books.update({
        where: {
          book_UUID: uuid,
        },
        data: {
          name: updateBookDto.name,
          description: updateBookDto.description,
          author_UUID: updateBookDto.author_UUID,
          borrow_UUID: updateBookDto.borrow_UUID
        },
      }),
    ).toJSON();
  }

  public async deleteByUUID(uuid: string) {
    return new NormalizedResponse(
      `Book for '${uuid} has been deleted'`,
      await this.prisma.books.delete({ where: { book_UUID: uuid } }),
    ).toJSON();
  }
}
