import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SquareDto } from 'src/square/square.dto';
import { RectangleService } from './rectangle.service';

@Controller('rectangle')
export class RectangleController {
    constructor(private rectangleService: RectangleService){}
    @Post()
    async SquareValues(@Body() squareDto:SquareDto){
        return this.rectangleService.rectangleAreaPerimeter(squareDto)
    }
    @Get('rectangles')
    findAll(){
        return this.rectangleService.findAll()
    }
    @Delete(':id')
    deletById(@Param('id') id: number) {
        return this.rectangleService.deleteById(id)
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.rectangleService.findById(id)
    }
    @Put(':id')
    updateById(@Param('id') id: number, @Body() cubeDto: SquareDto) {
        return this.rectangleService.updateOne(id, cubeDto)
    }
}
