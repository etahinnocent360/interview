import { TypeEnum } from "src/enums/name.enums";
import { Measurementunits } from "src/enums/unit.enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'triangle' })
export class TriangleRepository {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: TypeEnum
    @Column({nullable: true, precision:60, scale:10, type:'decimal', default:0})
    height: number
    @Column({nullable: true, precision:60, scale:10, type:'decimal', default:0})
    base: number
    @Column({nullable: true, precision:60, scale:10, type:'decimal', default:0})
    sideA: number
    @Column({nullable: true, precision:60, scale:10, type:'decimal', default:0})
    sideB: number
    @Column({nullable: true, precision:60, scale:10, type:'decimal', default:0})
    area: number
    @Column({nullable: true, precision:60, scale:10, type:'decimal', default:0})
    perimeter: number
    @Column({ type: 'enum', enum: ['m', 'cm', 'km', 'mm', 'dm'], default: 'm' })
    units: Measurementunits
}