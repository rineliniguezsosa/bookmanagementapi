import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm"

@Entity('BookAuthors')
export class BookAuthorsEntity{
    @PrimaryGeneratedColumn()
    id!:number;
}