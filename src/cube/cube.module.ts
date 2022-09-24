import { Module } from '@nestjs/common';
import { CubeController } from './cube.controller';
import { CubeService } from './cube.service';

@Module({
  controllers: [CubeController],
  providers: [CubeService]
})
export class CubeModule {}
