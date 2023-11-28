import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get('')
  getBrans() {
    return 'Brands of products';
  }

  @Get('/:id')
  getBrandById(@Param('id') id: number) {
    return `Brand ${id}`;
  }
}
