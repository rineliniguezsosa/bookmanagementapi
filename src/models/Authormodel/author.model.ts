import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('Authors')
export class AuthorsEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar',length:50,nullable:false})
    firstname!:string
}