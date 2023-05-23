import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async create(data) {
    const newUser = this.userRepository.create(data);
    return this.userRepository.save(newUser);
  }
}
