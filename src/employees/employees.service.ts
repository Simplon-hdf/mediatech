import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import NormalizedResponse from 'src/utils/normalized-response';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  public async getByUUID(uuid: string) {
    const gettedUser = new NormalizedResponse(
      `Employees ${uuid} has been found`,
      await this.prisma.employees.findUnique({
        where: {
          employee_UUID: uuid,
        },
      }),
    );
    return gettedUser.toJSON();
  }
  
  public async create(createEmployeeDto: CreateEmployeeDto) {
    const createdAuthor = new NormalizedResponse(
      `Employees ${createEmployeeDto} has been created`,
      await this.prisma.employees.create({
        data: {
          humanInformation_UUID: createEmployeeDto.humanInformation_UUID,
          mail_address: createEmployeeDto.mail_address,
          password: createEmployeeDto.password,
        },
      }),
    );
    return createdAuthor.toJSON();
  }

  public async updateByUUID(uuid: string, updateEmployeeDto: UpdateEmployeeDto) {
    return new NormalizedResponse(
      `Employees ${updateEmployeeDto.employee_UUID} has been updated`,
      await this.prisma.employees.update({
        where: {
          employee_UUID: uuid,
        },
        data: {
          employee_UUID: updateEmployeeDto.employee_UUID,
          humanInformation_UUID: updateEmployeeDto.humanInformation_UUID,
          mail_address: updateEmployeeDto.mail_address,
          password: updateEmployeeDto.password,
        },
      }),
    ).toJSON();
  }

  public async deleteByUUID(uuid: string) {
    const deletedUser = new NormalizedResponse(
      `User ${uuid} has been deleted`,
      await this.prisma.employees.delete({
        where: {
          employee_UUID: uuid,
        },
      }),
    );
    return deletedUser.toJSON();
  }

  findAll() {
    return `This action returns all employees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }
}
