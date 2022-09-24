import { TypeEnum } from "src/enums/name.enums"
import { Measurementunits } from "src/enums/unit.enums"

export class CircleDto {
    name: TypeEnum
    radius: number
    area: number
    perimeter: number
    units: Measurementunits
}