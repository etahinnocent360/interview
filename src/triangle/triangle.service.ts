import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeEnum } from 'src/enums/name.enums';
import { Repository } from 'typeorm';
import { TriangleDto } from './triangleDto';
import { TriangleRepository } from './triangleRepo';

@Injectable()
export class TriangleService {
    constructor(@InjectRepository(TriangleRepository) private triangleRepo: Repository<TriangleRepository>) { }
   async triangleParams(triangleDto:TriangleDto){
    try {
        const { name, height, base, area, perimeter, units,sideA, sideB } = triangleDto
      if(base > 0){
      
        if (name === TypeEnum.AREA && height > 0 && base > 0) {
            console.log(name)
            const newArea = this.triangleRepo.save({
                name,
                height,
                base,
                area: (base*height)/2,
                units
            })
            return newArea
        }
        if (name === TypeEnum.PERIMETER) {
            console.log(name)
            const newPerimeter = this.triangleRepo.save({
                name,
                height,
                sideA,
                sideB,
                base,
                perimeter: base + sideA + sideB,
                units
            })
            return newPerimeter
        }
      } else {
        return 'height or width can not be less than or equal to zero'
      }
    } catch (error){
        console.log(error)
    }
   }

   async findAll(){
    try{
        const allTriangles = await this.triangleRepo.find()
        return allTriangles
    }catch(error){

    }
   }
}
