import { getRepository } from "typeorm";
import { Todo } from "../entities/Todo";

export class GetTodoService {

  async execute(todoId: string): Promise<Todo> {
    const todoRepo = getRepository(Todo);

    const todo = await todoRepo.findOne(todoId);

    return todo;
  }

}