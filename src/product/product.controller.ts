import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService){}

  @Get()
  async all() {
   return this.productService.all()
  }

  @EventPattern('hello')
  async hello(data: string) {
    console.log(`Receiving data => ${data}`)
  }
}
