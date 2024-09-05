import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { BooksEntity } from "../Bookmodel/book.model";


@Entity('Genres')
export class GenresEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar',length:100,unique:true,nullable:false})
    name!:string;

    @Column({type:'text',nullable:true})
    description!:string

    @Column({type:'timestamp'})
    created_at!:Date

    @OneToMany(()=> BooksEntity,(book)=> book.genre_id)
    books!:BooksEntity[]
}