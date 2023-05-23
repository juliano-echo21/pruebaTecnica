import { HttpStatus, Response } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    console.log('etnra');
    return await this.usersService.getUsers();
  }

  @Post()
  async postUser(
    @Body('name') name: string,
    @Body('surname') surname: string,
    @Body('username') username: string,
    @Body('creditBalance') creditBalance: number,
  ): Promise<any> {
    const data = {
      name: name,
      surname: surname,
      username: username,
      creditBalance: creditBalance,
    };
    return this.usersService.create(data);
  }
}
