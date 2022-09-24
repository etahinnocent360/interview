import { TypeEnum } from "src/enums/name.enums";
import { Measurementunits } from "src/enums/unit.enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'triangle' })
export class TriangleRepository {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: TypeEnum
    @Column({nullable:true})
    height: number
    @Column({nullable:true})
    base: number
    @Column({nullable:true})
    sideA: number
    @Column({nullable:true})
    sideB: number
    @Column({ nullable: true })
    area: number
    @Column({ nullable: true })
    perimeter: number
    @Column({ type: 'enum', enum: ['m', 'cm', 'km', 'mm', 'dm'], default: 'm' })
    units: Measurementunits
}