import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class loginEntity{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string

    @Column()
    password:string
}