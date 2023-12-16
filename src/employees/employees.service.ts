import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import NormalizedResponse from 'src/utils/normalized-response';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeesService {

  private saltRounds = 10;

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
  const createdEmployee = await this.prisma.employees.create({
      data: {
        humanInformation: {
              create: {
                  first_name: createEmployeeDto.first_name,
                  last_name: createEmployeeDto.last_name,
              },
          },
          mail_address: createEmployeeDto.mail_address,
          password: await bcrypt.hash(createEmployeeDto.password, this.saltRounds),
      },
  });
  return new NormalizedResponse(`Employee ${createEmployeeDto.first_name + " " +  createEmployeeDto.last_name} has been created`, createdEmployee).toJSON();
}

public async updateByUUID(uuid: string, updateEmployeeDto: UpdateEmployeeDto) {
  const employee = await this.prisma.employees.update({
      where: {
        employee_UUID: uuid,
      },
      data: {
        humanInformation: {
              update: {
                  first_name: updateEmployeeDto.first_name,
                  last_name: updateEmployeeDto.last_name,
              },
          },
          mail_address: updateEmployeeDto.mail_address,
          password: updateEmployeeDto.password,
      },
  });

  return new NormalizedResponse(`Employee ${updateEmployeeDto.first_name + " " +  updateEmployeeDto.last_name} has been updated`, employee).toJSON();
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
