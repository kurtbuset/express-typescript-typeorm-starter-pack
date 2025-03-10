// Defines the database structure.

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string
}