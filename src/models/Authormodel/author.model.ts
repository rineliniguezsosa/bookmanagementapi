import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('Authors')
export class AuthorsEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar',length:50,nullable:false})
    firstname!:string

    @Column({type:'varchar',length:50,nullable:false})
    lastname!:string

    @Column({type:'date',nullable:true})
    birthdate!:Date

    @Column({type:'varchar',nullable:true,length:50})
    nationality!:string

    @Column({type:'timestamp'})
    created_at!:Date
}