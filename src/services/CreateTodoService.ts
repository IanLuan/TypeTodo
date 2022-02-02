import { getRepository } from "typeorm";
import { Todo } from "../entities/Todo";
import { User } from "../entities/User";


export class CreateTodoService {
  
  async execute(title: string, description: string, userId: string): Promise<Todo> {
    const repoTodo = getRepository(Todo);
    const repoUser = getRepository(User);

    const user = await repoUser.findOne(userId);

    const todo = repoTodo.create({
      title,
      description,
      user
    });

    await repoTodo.save(todo);

    return todo;
  }
}