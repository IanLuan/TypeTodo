import { getRepository, Repository } from "typeorm";
import { Todo } from "./todo.entity";
import { User } from "../user/user.entity";

export class TodoService {

  private todoRepository: Repository<Todo>;
  private userRepository: Repository<User>;

  constructor(todoRepository: Repository<Todo>, userRepository: Repository<User>) {
    this.todoRepository = todoRepository;
    this.userRepository = userRepository;
  }

  async create(title: string, description: string, userId: string): Promise<Todo> {
    const user = await this.userRepository.findOne(userId);

    const newTodo = this.todoRepository.create({
      title,
      description,
      user
    });

    await this.todoRepository.save(newTodo);

    return newTodo;
  }

  async findAll(userId: string): Promise<Todo[]> {
    const todos = await this.todoRepository.find({
      where: { user: userId }
    });

    return todos;
  }

  async findOne(todoId: string): Promise<Todo> {
    return await this.todoRepository.findOne(todoId);
  }

}