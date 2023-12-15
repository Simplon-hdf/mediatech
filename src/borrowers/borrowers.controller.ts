import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BorrowersService } from './borrowers.service';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';

@Controller('borrowers')
export class BorrowersController {
  constructor(private readonly borrowersService: BorrowersService) {}

  @Post()
  create(@Body() createBorrowerDto: CreateBorrowerDto) {
    return this.borrowersService.create(createBorrowerDto);
  }

  @Get()
  findAll() {
    return this.borrowersService.findAll();
  }

  @Get(':uuid')
  public getByUUID(@Param('uuid') uuid: string) {
    return this.borrowersService.getByUUID(uuid);
  }

  @Patch(':uuid')
  updateByUUIDs(
    @Param('uuid') uuid: string,
    @Body() updateAuthorDto: UpdateBorrowerDto,
  ) {
    return this.borrowersService.updateByUUID(uuid, updateAuthorDto);
  }

  @Delete(':uuid')
  public deleteByUUID(@Param('uuid') uuid: string) {
    return this.borrowersService.deleteByUUID(uuid);
  }
}
