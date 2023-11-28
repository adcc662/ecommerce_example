import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategories(
    @Param('id') id: number,
    @Param('productId') productId: number,
  ) {
    return `Product ${id} and ${productId}`;
  }
}
