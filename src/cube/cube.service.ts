import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeEnum } from 'src/enums/name.enums';
import { Measurementunits } from 'src/enums/unit.enums';
import { SquareDto } from 'src/square/square.dto';
import { Repository } from 'typeorm';
import { CubeRepository } from './cubeRepository';

@Injectable()
export class CubeService {
    constructor(@InjectRepository(CubeRepository) private cubeRepo: Repository<CubeRepository>) { }
    async cubeAreaPerimeter(cubeValues: SquareDto) {
        try {
            const { name, height, width, area, perimeter, units } = cubeValues

            if (name === TypeEnum.PERIMETER && height === width) {
                console.log(name)
                const newPerimeter = await this.cubeRepo.save({
                    name,
                    height,
                    width,
                    perimeter: 12 * (height),
                    units
                })
                return newPerimeter
            }

           
            if (height > 0 && width > 0) {
                if (height !== width) {
                    return {
                        message: 'height must be equal to the width'
                    }
                }
                if (name === TypeEnum.AREA || height === width) {
                    console.log(name)
                    const newArea = await this.cubeRepo.save({
                        name,
                        height,
                        width,
                        perimeter,
                        area: 6 * (height * width),
                        units
                    })
                    return newArea
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
            const allCubes = await this.cubeRepo.find()
            return allCubes
        } catch (error) {

        }
    }
    async deleteById(id: number) {
        try {
            const deleteCube = await this.cubeRepo.delete(id)
            return deleteCube
        } catch (error) {

        }
    }
    async findById(id: number) {
        try {
            const findCube = await this.cubeRepo.findOne({ where: { id } })
            return findCube
        } catch (error) {

        }
    }
    async updateOne(id: number, squareDto: SquareDto) {
        const { name, area, width, height, perimeter, units, } = squareDto
        try {
            if (name === TypeEnum.AREA) {
                const cubeName = await this.cubeRepo.findOne({ where: { id } })
                const updateById = await this.cubeRepo.update(id, {
                    name: cubeName.name,
                    height,
                    width,
                    area: 6 * (height * width),
                    perimeter: 12 * (height),
                    units
                })
                return updateById
            }
            if (name === TypeEnum.PERIMETER) {
                const cubeName = await this.cubeRepo.findOne({ where: { id } })
                const updateById = await this.cubeRepo.update(id, {
                    name: cubeName.name,
                    height,
                    width,
                    perimeter: 12 * (height),
                    area: 6 * (height * width),
                    units
                })
                return updateById
            }
        } catch (error) {

        }
    }
}
