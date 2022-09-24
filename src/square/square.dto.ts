import { TypeEnum } from "src/enums/name.enums"
import { Measurementunits } from "src/enums/unit.enums"

export class SquareDto {
    name: TypeEnum
    height: number
    width: number
    area: number
    perimeter: number
    units: Measurementunits
}