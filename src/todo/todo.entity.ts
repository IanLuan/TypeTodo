import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity("todos")
export class Todo {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, user => user.todos)
  user: User;

  @CreateDateColumn()
  created_at: Date;
}