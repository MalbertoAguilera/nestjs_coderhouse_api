import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [ProductModule,MongooseModule.forRoot("mongodb+srv://matias:atlas1234@sessionatlas.jvq29.mongodb.net/NestJs?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
