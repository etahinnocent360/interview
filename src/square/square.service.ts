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
            if (height > 0 && width > 0) {
                if (!Measurementunits) {
                    return 'invalid input'
                }
                if (height !== width) {
                    return {
                        message: 'height must be equal to the width'
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
                        perimeter: 4 * height,
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
    async findAll() {
        try {
            const allSquares = await this.squareRepo.find()
            return allSquares
        } catch (error) {

        }
    }
    async deleteById(id: number) {
        try {
            const deleteSquare = await this.squareRepo.delete(id)
            return deleteSquare
        } catch (error) {

        }
    }
    async findById(id: number) {
        try {
            const findSquare = await this.squareRepo.findOne({ where: { id } })
            return findSquare
        } catch (error) {

        }
    }
    async updateOne(id: number, squareDto: SquareDto) {
        const { name, area, width, height, perimeter, units, } = squareDto
        try {
            if (name === TypeEnum.AREA) {
                const squareName = await this.squareRepo.findOne({ where: { id } })
                const updateById = await this.squareRepo.update(id, {
                    name: squareName.name,
                    height,
                    width,
                    area: height * width,
                    perimeter: 4 * height,
                    units
                })
                return updateById
            }
            if (name === TypeEnum.PERIMETER) {
                const squareName = await this.squareRepo.findOne({ where: { id } })
                const updateById = await this.squareRepo.update(id, {
                    name: squareName.name,
                    height,
                    width,
                    perimeter: 4 * height,
                    area: height * width,
                    units
                })
                return updateById
            }
        } catch (error) {

        }
    }
}
