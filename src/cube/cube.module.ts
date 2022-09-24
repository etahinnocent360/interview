import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CubeController } from './cube.controller';
import { CubeService } from './cube.service';
import { CubeRepository } from './cubeRepository';

@Module({
  imports: [TypeOrmModule.forFeature([CubeRepository])],
  controllers: [CubeController],
  providers: [CubeService]
})
export class CubeModule {}
