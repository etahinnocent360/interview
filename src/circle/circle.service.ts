import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeEnum } from 'src/enums/name.enums';
import { Repository } from 'typeorm';
import { CircleDto } from './circledto';
import { CircleRepository } from './circleRepository';

@Injectable()
export class CircleService {
    constructor(@InjectRepository(CircleRepository) private circlerRepo: Repository<CircleRepository>) { }
    async circleParameters(circleParams: CircleDto) {
        const { area, perimeter, radius, name, units } = circleParams
        try {
            if (radius < 0 || radius === 0) {
                return 'radius must be greater than zero'
            }
            if (name === TypeEnum.AREA && radius > 0) {
                const newArea = this.circlerRepo.save({
                    radius,
                    name,
                    area: radius * radius * (Math.PI),
                    units
                })
                return newArea
            }
            if (name === TypeEnum.PERIMETER && radius > 0) {
                const newPerimeter = await this.circlerRepo.save({
                    radius,
                    name,
                    perimeter: 2 * (Math.PI) * radius,
                    units
                })
                return newPerimeter
            }
        } catch (error) {

        }
    }
    async findAll() {
        try {
            const allCircles = await this.circlerRepo.find()
            return allCircles
        } catch (error) {

        }
    }
    async deleteById(id: number) {
        try {
            const deleteCircle = await this.circlerRepo.delete(id)
            return deleteCircle
        } catch (error) {

        }
    }
    async findById(id: number) {
        try {
            const findCircle = await this.circlerRepo.findOne({ where: { id } })
            return findCircle
        } catch (error) {

        }
    }
    async updateOne(id: number, circleDto: CircleDto) {
        const { name, area, radius, perimeter, units, } = circleDto
        try {
            if (name === TypeEnum.AREA) {
                const findCircle = await this.circlerRepo.findOne({ where: { id } })
                const updateById = await this.circlerRepo.update(id, {
                    name: findCircle.name,
                    radius,
                    area: radius * radius * (Math.PI),
                    perimeter: 2 * (Math.PI) * radius,
                    units
                })
                return updateById
            }

            if (name === TypeEnum.PERIMETER) {
                const findCircle = await this.circlerRepo.findOne({ where: { id } })
                const updateById = await this.circlerRepo.update(id, {
                    name: findCircle.name,
                    radius,
                    perimeter: 2 * (Math.PI) * radius,
                    area: radius * radius * (Math.PI),
                    units
                })
                return updateById
            }

        } catch (error) {

        }
    }
}
