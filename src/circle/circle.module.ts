import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CircleController } from './circle.controller';
import { CircleService } from './circle.service';
import { CircleRepository } from './circleRepository';

@Module({
  imports: [TypeOrmModule.forFeature([CircleRepository])],
  controllers: [CircleController],
  providers: [CircleService]
})
export class CircleModule {}
