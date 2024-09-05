import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,Check } from "typeorm"
import { BooksEntity } from "../Bookmodel/book.model";

@Entity('Reviews')
@Check(`'rating' BETWEEN 1 AND 5`)
export class ReviewsEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'text',nullable:false})
    content!:string

    @Column({type:'tinyint',nullable:false})
    rating!:string

    @ManyToOne(()=> BooksEntity, (book)=> book.reviews, {nullable:false})
    book_id!:BooksEntity

    @Column({type:'timestamp'})
    created_at!:Date
}