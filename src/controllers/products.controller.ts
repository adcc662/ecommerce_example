import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('')
  getAllProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    /**Deconstruction ECMA */
    // const { limit, offset } = params;
    return `Products: limit => ${limit}, offset => ${offset}, brand => ${brand}`;
  }

  @Get('/:id')
  getProduct(@Param('id') id: number) {
    return `Product ${id}`;
  }
}
