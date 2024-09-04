import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from "typeorm"

@Entity('Reviews')
export class ReviewsEntity {
    @PrimaryGeneratedColumn()
    id!:number;
}