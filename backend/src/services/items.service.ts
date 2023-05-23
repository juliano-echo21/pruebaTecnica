import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../entities/Item';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async getItems(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async create(data) {
    const newItem = this.itemRepository.create(data);
    return await this.itemRepository.save(newItem);
  }
}
