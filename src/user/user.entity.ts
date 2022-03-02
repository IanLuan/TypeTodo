import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Todo } from "../todo/todo.entity";

@Entity("users")
export class User {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Todo, todo => todo.user)
  todos: Todo[]

}