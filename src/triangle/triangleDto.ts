import { TypeEnum } from "src/enums/name.enums"
import { Measurementunits } from "src/enums/unit.enums"

export class TriangleDto {
    name: TypeEnum
    height: number
    base: number
    area: number
    sideA:number
    sideB:number
    perimeter: number
    units: Measurementunits
}