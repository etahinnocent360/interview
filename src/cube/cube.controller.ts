import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SquareDto } from 'src/square/square.dto';
import { CubeService } from './cube.service';

@Controller('cube')
export class CubeController {
    constructor(private cubeService: CubeService) { }
    @Post()
    cubeParams(@Body() cubeDto: SquareDto) {
        return this.cubeService.cubeAreaPerimeter(cubeDto)
    }
    @Get('cubes')
    findAll() {
        return this.cubeService.findAll()
    }
    @Delete(':id')
    deletById(@Param('id') id: number) {
        return this.cubeService.deleteById(id)
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.cubeService.findById(id)
    }
    @Put(':id')
    updateById(@Param('id') id: number, @Body() cubeDto: SquareDto) {
        return this.cubeService.updateOne(id, cubeDto)
    }
}
