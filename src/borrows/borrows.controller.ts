import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BorrowsService } from './borrows.service';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto'; // Correction du nom du DTO

@Controller('borrows')
export class UsersController {
  constructor(private readonly borrowsService: BorrowsService) {} // Correction du nom du service

  @Post()
  public create(@Body() createBorrowDto: CreateBorrowDto) {
    return this.borrowsService.create(createBorrowDto);
  }

  @Get(':uuid')
  public getByUUID(@Param('uuid') uuid: string) {
    return this.borrowsService.getByUUID(uuid);
  }

  @Patch(':uuid')
  public updateByUUID(
    @Param('uuid') uuid: string,
    @Body() updateBorrowDto: UpdateBorrowDto, // Correction du nom du DTO
  ) {
    return this.borrowsService.updateByUUID(uuid, updateBorrowDto);
  }

  @Delete(':uuid')
  public deleteByUUID(@Param('uuid') uuid: string) {
    return this.borrowsService.deleteByUUID(uuid);
  }
}
