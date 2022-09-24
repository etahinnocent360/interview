import { TypeEnum } from "src/enums/name.enums";
import { Measurementunits } from "src/enums/unit.enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'circle' })
export class CircleRepository {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: TypeEnum
    @Column()
    radius: number
    @Column({nullable: true})
    perimeter: number
    @Column({nullable: true})
    area: number
    @Column({type:'enum', enum:['m', 'cm', 'km', 'mm', 'dm'], default:'m'})
    units:Measurementunits
}