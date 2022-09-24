import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TriangleController } from './triangle.controller';
import { TriangleService } from './triangle.service';
import { TriangleRepository } from './triangleRepo';

@Module({
  imports: [TypeOrmModule.forFeature([TriangleRepository])],
  controllers: [TriangleController],
  providers: [TriangleService]
})
export class TriangleModule {}
