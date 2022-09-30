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
        
      } else {
        return 'height or base can not be less than or equal to zero'
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
   async deleteById(id: number) {
    try {
        const deleteRectangle = await this.triangleRepo.delete(id)
        return deleteRectangle
    } catch (error) {

    }
}
async findById(id: number) {
    try {
        const findRectangle = await this.triangleRepo.findOne({ where: { id } })
        return findRectangle
    } catch (error) {

    }
}
async updateOne(id: number, squareDto: TriangleDto) {
    const { name, height, base, area, perimeter, units,sideA, sideB} = squareDto
    try {
    
        if (name === TypeEnum.AREA) {
            const squareName = await this.triangleRepo.findOne({ where: { id } })
            const updateById = await this.triangleRepo.update(id, {
                name,
                height,
                base,
                area: (base*height)/2,
                perimeter: base + sideA + sideB,
                units
            })
            return updateById
        }
        if (name === TypeEnum.PERIMETER) {
            const squareName = await this.triangleRepo.findOne({ where: { id } })
            const updateById = await this.triangleRepo.update(id, {
                name,
                height,
                sideA,
                sideB,
                base,
                perimeter: base + sideA + sideB,
                area: (base*height)/2,
                units
            })
            return updateById
        }
    } catch (error) {

    }
}
}
