import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity('Users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar',length:100,unique:true,nullable:false})
    name!:string
}