import { TypeEnum } from "src/enums/name.enums";
import { Measurementunits } from "src/enums/unit.enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cubeTable' })
export class CubeRepository {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: TypeEnum
    @Column()
    height: number
    @Column()
    width: number
    @Column({nullable: true, precision:60, scale:10, type:'decimal', default:0})
    area: number
    @Column({nullable: true, precision:60, scale:10, type:'decimal', default:0})
    perimeter: number
    @Column({ type: 'enum', enum: ['m', 'cm', 'km', 'mm', 'dm'], default: 'm' })
    units: Measurementunits
}