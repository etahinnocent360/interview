import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeEnum } from 'src/enums/name.enums';
import { Measurementunits } from 'src/enums/unit.enums';
import { SquareRepository } from 'src/squar/square.repository';
import { Repository } from 'typeorm';
import { SquareDto } from './square.dto';

@Injectable()
export class SquareService {
    constructor(@InjectRepository(SquareRepository) private squareRepo: Repository<SquareRepository>) { }
    async squareAreaPerimeter(squareValues: SquareDto) {
        try {
            const { name, height, width, area, perimeter, units } = squareValues
          if(height > 0 && width > 0){
            if(!Measurementunits){
                return 'invalid input'
            }
            if(height !== width){
                return{
                    message:'height must be equal to the width'
                }
            }
            if (name === TypeEnum.AREA) {
                console.log(name)
                const newArea = this.squareRepo.save({
                    name,
                    height,
                    width,
                    perimeter,
                    area: height * width,
                    units
                })
                return newArea
            }
            if (name === TypeEnum.PERIMETER && height === width) {
                console.log(name)
                const newPerimeter = this.squareRepo.save({
                    name,
                    height,
                    width,
                    perimeter: 4*height,
                    units
                })
                return newPerimeter
            }
          } else {
            return 'height or width can not be less than or equal to zero'
          }
        } catch {
            throw new BadRequestException()
        }
    }
}
