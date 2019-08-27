import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Length, IsDate } from 'class-validator';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(10, 100)
    name: string;

    @Column()
    @Length(50, 500)
    description: string;

    @Column()
    @IsDate()
    date: Date;
}
