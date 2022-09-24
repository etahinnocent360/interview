import { Body, Controller, Post } from '@nestjs/common';
import { SquareDto } from './square.dto';
import { SquareService } from './square.service';

@Controller('square')
export class SquareController {
    constructor(private squareService: SquareService){}
    @Post()
    async SquareValues(@Body() squareDto:SquareDto){
        return this.squareService.squareAreaPerimeter(squareDto)
    }
}
