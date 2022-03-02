import { Request, Response } from "express";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.entity";

export class TodoController {

  todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  async create(request: Request, response: Response) {
    const { title, description, userId } = request.body;

    const newTodo = await this.todoService.create(title, description, userId);

    return response.json(newTodo);
  }

  async findAll(request: Request, response: Response) {
    const { userId } = request.body;

    const todos = await this.todoService.findAll(userId);

    return response.json(todos)
  }

  async findOne(request: Request, response: Response) {
    const { todoId } = request.body;

    const todo = await this.todoService.findOne(todoId);

    return response.json(todo);
  }

}