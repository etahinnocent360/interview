import { Module } from '@nestjs/common';
import { TriangleController } from './triangle.controller';
import { TriangleService } from './triangle.service';

@Module({
  controllers: [TriangleController],
  providers: [TriangleService]
})
export class TriangleModule {}
