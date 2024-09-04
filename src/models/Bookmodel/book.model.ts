import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from "typeorm"
import { AuthorsEntity } from "../Authormodel/author.model";

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

    @Column({type:'int',nullable:true})
    number_of_pages!:number

    @Column({type:'timestamp'})
    created_at!:Date

    @ManyToOne(()=> AuthorsEntity, (author) => author.books)
    author_id!:AuthorsEntity;
}