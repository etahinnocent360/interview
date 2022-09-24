import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeEnum } from 'src/enums/name.enums';
import { SquareDto } from 'src/square/square.dto';
import { Repository } from 'typeorm';
import { RectangleRepository } from './rectangleRepositary';

@Injectable()
export class RectangleService {
    constructor(@InjectRepository(RectangleRepository) private rectangleRepo: Repository<RectangleRepository>){}
    async rectangleAreaPerimeter(squareValues: SquareDto) {
        try {
            const { name, height, width, area, perimeter, units } = squareValues
          if(height > 0 && width > 0){
          
            if(height === width){
                return{
                    message:'A rectangle can not have equal height and width'
                }
            }
            if (name === TypeEnum.AREA) {
                console.log(name)
                const newArea = this.rectangleRepo.save({
                    name,
                    height,
                    width,
                    perimeter,
                    area: height * width,
                    units
                })
                return newArea
            }
            if (name === TypeEnum.PERIMETER) {
                console.log(name)
                const newPerimeter = this.rectangleRepo.save({
                    name,
                    height,
                    width,
                    perimeter: 2 * (width + height),
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
            const allRectangles = await this.rectangleRepo.find()
            return allRectangles
        } catch(error){

        }
    }
    async deleteById(id: number) {
        try {
            const deleteRectangle = await this.rectangleRepo.delete(id)
            return deleteRectangle
        } catch (error) {

        }
    }
    async findById(id: number) {
        try {
            const findRectangle = await this.rectangleRepo.findOne({ where: { id } })
            return findRectangle
        } catch (error) {

        }
    }
    async updateOne(id: number, squareDto: SquareDto) {
        const { name, area, width, height, perimeter, units, } = squareDto
        try {
            if(height === width){
                return{
                    message:'A rectangle can not have equal height and width'
                }
            }
            if (name === TypeEnum.AREA) {
                const squareName = await this.rectangleRepo.findOne({ where: { id } })
                const updateById = await this.rectangleRepo.update(id, {
                    name: squareName.name,
                    height,
                    width,
                    area: height * width,
                    units
                })
                return updateById
            }
            if (name === TypeEnum.PERIMETER) {
                const squareName = await this.rectangleRepo.findOne({ where: { id } })
                const updateById = await this.rectangleRepo.update(id, {
                    name: squareName.name,
                    height,
                    width,
                    perimeter: 2 * (width + height),
                    units
                })
                return updateById
            }
        } catch (error) {

        }
    }
}
