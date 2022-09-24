import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TriangleService } from './triangle.service';
import { TriangleDto } from './triangleDto';

@Controller('triangle')
export class TriangleController {
    constructor(private triangleService: TriangleService){}
    @Post()
    triangleParams(@Body() triangleDto: TriangleDto){
        return this.triangleService.triangleParams(triangleDto)
    }
    @Get('triangles')
    findAll(){
        return this.triangleService.findAll()
    }
    @Delete(':id')
    deletById(@Param('id') id: number) {
        return this.triangleService.deleteById(id)
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.triangleService.findById(id)
    }
    @Put(':id')
    updateById(@Param('id') id: number, @Body() triangleDto: TriangleDto) {
        return this.triangleService.updateOne(id, triangleDto)
    }
}
