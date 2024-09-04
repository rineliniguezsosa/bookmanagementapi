import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('Books')
export class BooksEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar',length:150,nullable:true})
    title!:string

    @Column({type:'varchar',unique:true,length:20,nullable:true})
    isbn!:string

}