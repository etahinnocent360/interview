import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteQueryBuilder } from 'typeorm';
import { CircleService } from './circle.service';
import { CircleDto } from './circledto';

@Controller('circle')
export class CircleController {
    constructor(private circleService: CircleService) { }
    @Post()
    circleParameters(@Body() params: CircleDto) {
        return this.circleService.circleParameters(params)
    }
    @Get('circles')
    findAll() {
        return this.circleService.findAll()
    }
    @Delete(':id')
    deletById(@Param('id') id: number) {
        return this.circleService.deleteById(id)
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.circleService.findById(id)
    }
    @Put(':id')
    updateById(@Param('id') id: number, @Body() circleDto: CircleDto) {
        return this.circleService.updateOne(id, circleDto)
    }
}
