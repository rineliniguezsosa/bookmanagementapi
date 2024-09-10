import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { BooksEntity } from "../Bookmodel/book.model";


@Entity('Publishers')
export class PublisherEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar',length:30,nullable:false})
    name!:string

    @Column({type:'varchar',length:50,nullable:true})
    country!:string

    @Column({type:'smallint',nullable:true})
    established_year!:number

    @Column({type:'timestamp'})
    created_at!:Date

    @OneToMany(()=> BooksEntity,(book)=> book.publisher)
    books!:BooksEntity[]
}