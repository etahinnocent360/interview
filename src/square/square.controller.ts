import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SquareDto } from './square.dto';
import { SquareService } from './square.service';

@Controller('square')
export class SquareController {
    constructor(private squareService: SquareService) { }
    @Post()
    async SquareValues(@Body() squareDto: SquareDto) {
        return this.squareService.squareAreaPerimeter(squareDto)
    }
    @Get('squares')
    findAll() {
        return this.squareService.findAll()
    }
    @Delete(':id')
    deletById(@Param('id') id: number) {
        return this.squareService.deleteById(id)
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.squareService.findById(id)
    }
    @Put(':id')
    updateById(@Param('id') id: number, @Body() cubeDto: SquareDto) {
        return this.squareService.updateOne(id, cubeDto)
    }
}
