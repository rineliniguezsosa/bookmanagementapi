import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity('Users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar',length:10,unique:true,nullable:false})
    username!:string

    @Column({type:'varchar',length:100,nullable:false})
    email!:string

    @Column({type:'varchar',length:16,nullable:false})
    password!:string

    @Column({type:'timestamp'})
    created_at!:Date
}