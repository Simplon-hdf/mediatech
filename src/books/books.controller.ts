import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }


  @Get('book/:uuid')
  public getByBookUUID(@Param('uuid') uuid: string) {
    return this.booksService.getByBookUUID(uuid);
  }

  @Get('author/:uuid')
  public getByAuthorUUID(@Param('uuid') uuid: string) {
    return this.booksService.getByAuthorUUID(uuid);
  }

  @Get('borrow/:uuid')
  public getByBorrowUUID(@Param('uuid') uuid: string) {
    return this.booksService.getByBorrowUUID(uuid);
  }
  
  @Patch(':uuid')
  public updateByUUID(
    @Param('uuid') uuid: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.updateByUUID(uuid, updateBookDto);
  }

  @Delete(':uuid')
  public deleteByUUID(@Param('uuid') uuid: string) {
    return this.booksService.deleteByUUID(uuid);
  }
}
