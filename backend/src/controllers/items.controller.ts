import { HttpStatus, Response } from '@nestjs/common';
import { ItemsService } from '../services/items.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}
  @Get()
  async getItems() {
    console.log('etnra');
    return await this.itemsService.getItems();
  }

  @Post()
  async postItem(
    @Body('name') name: string,
    @Body('price') price: number,
    @Response() response,
  ): Promise<any> {
    const data = {
      name: name,
      price: price,
    };
    return await this.itemsService.create(data);
  }
}
