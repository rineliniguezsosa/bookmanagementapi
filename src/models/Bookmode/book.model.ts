import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('Books')
export class BooksEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar',length:150,nullable:false})
    title!:string

    @Column({type:'varchar',unique:true,length:20,nullable:false})
    isbn!:string

    @Column({type:'date',nullable:true})
    publication_date!:Date

}