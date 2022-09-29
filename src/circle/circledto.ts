import { TypeEnum } from "src/enums/name.enums"
import { Measurementunits } from "src/enums/unit.enums"
import {MaxLength} from 'class-validator'

export class CircleDto {
    name: TypeEnum
    radius: number
    @MaxLength(200)
    area: number
    @MaxLength(200)
    perimeter: number
    units: Measurementunits
}