import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException} from '@nestjs/common';
import { get } from 'http';
import {CreateProductDTO} from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

      constructor(private productService:ProductService){}

      @Post('/create')
      async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){
            const product = await this.productService.createProduct(createProductDTO);
            return res.status(HttpStatus.OK).json({
                  message:'product successfully created',
                  product
            });
      }

      @Get('/')
      async getProducts(@Res() res) {
            const products = await this.productService.getProducts();
            return res.status(HttpStatus.OK).json({
                  products
            })
      }

      @Get('/:productID')
      async getProduct(@Res() res, @Param('productID') productID) {
            const product = await this.productService.getProduct(productID);
            if(!product){
                  throw new NotFoundException('product desn`t exists')
            }
            return res.status(HttpStatus.OK).json({
                  product
            })
      }

      // @Delete('/delete')
      // deleteProduct(){}

      // @Put('/delete')
      // updateProduct(){}
}
