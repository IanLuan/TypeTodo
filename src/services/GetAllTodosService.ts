import { getRepository } from "typeorm";
import { Todo } from "../entities/Todo";
import { User } from "../entities/User";


export class GetAllTodosService {
  
  async execute(userId: string): Promise<Todo[]> {
    const todoRepo = getRepository(Todo);

    const todos = await todoRepo.find({
      where: { user: userId }
    });

    return todos;
  }
}