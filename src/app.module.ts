import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { BorrowersModule } from './borrowers/borrowers.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [AuthorsModule, BorrowersModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
