import { getRepository } from "typeorm";
import { Todo } from "../entities/Todo";
import { User } from "../entities/User";


export class CreateTodoService {
  
  async execute(title: string, description: string, userId: string): Promise<Todo> {
    const todoRepo = getRepository(Todo);
    const userRepo = getRepository(User);

    const user = await userRepo.findOne(userId);

    const todo = todoRepo.create({
      title,
      description,
      user
    });

    await todoRepo.save(todo);

    return todo;
  }
}