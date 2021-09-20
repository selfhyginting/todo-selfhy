import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Todo{

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    todolist : string;

    @Column('text')
    deskripsi : string;

}