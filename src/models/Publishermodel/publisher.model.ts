import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity('Publishers')
export class PublisherEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar',length:50,nullable:true})
    country!:string

    @Column({type:'smallint',nullable:true})
    established_year!:number

    @Column({type:'timestamp'})
    created_at!:Date
}