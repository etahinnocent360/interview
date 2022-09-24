import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RectangleController } from './rectangle.controller';
import { RectangleService } from './rectangle.service';
import { RectangleRepository } from './rectangleRepositary';

@Module({
  imports: [TypeOrmModule.forFeature([RectangleRepository])],
  controllers: [RectangleController],
  providers: [RectangleService]
})
export class RectangleModule {}
