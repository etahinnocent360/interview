import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
