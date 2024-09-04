import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,Check } from "typeorm"

@Entity('Reviews')
@Check(`'rating' BETWEEN 1 AND 5`)
export class ReviewsEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'text',nullable:false})
    content!:string

    @Column({type:'tinyint',nullable:false})
    rating!:string
}