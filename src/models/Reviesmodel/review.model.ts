import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,Check,JoinColumn } from "typeorm"
import { BooksEntity } from "../Bookmodel/book.model";
import { UserEntity } from "../Usermodel/user.model";

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
    @JoinColumn({name:'book_id'})
    books!:BooksEntity

    @ManyToOne(()=> UserEntity, (user)=> user.reviews, {nullable:false})
    @JoinColumn({name:'user_id'})
    user!:BooksEntity

    @Column({type:'timestamp'})
    created_at!:Date
}