import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('Books')
export class BooksEntity {
    @PrimaryGeneratedColumn()
    id!:number;

}