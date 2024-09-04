import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity('Genres')
export class GenresEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar',length:100,unique:true,nullable:true})
    name!:string;

    @Column({type:'text',nullable:false})
    description!:string

    @Column({type:'timestamp'})
    created_at!:Date
}