import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SquareRepository } from 'src/squar/square.repository';
import { SquareController } from './square.controller';
import { SquareService } from './square.service';

@Module({
  imports:[TypeOrmModule.forFeature([SquareRepository])],
  controllers: [SquareController],
  providers: [SquareService]
})
export class SquareModule {}
