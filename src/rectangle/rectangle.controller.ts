import { Body, Controller, Post } from '@nestjs/common';
import { SquareDto } from 'src/square/square.dto';
import { RectangleService } from './rectangle.service';

@Controller('rectangle')
export class RectangleController {
    constructor(private rectangleService: RectangleService){}
    @Post()
    async SquareValues(@Body() squareDto:SquareDto){
        return this.rectangleService.rectangleAreaPerimeter(squareDto)
    }
}
