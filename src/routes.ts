import { Router } from "express";
import { getRepository, Repository } from "typeorm";
import { Todo } from "./todo/todo.entity";
import { User } from "./user/user.entity";
import { TodoService } from "./todo/todo.service";
import { UserService } from "./user/user.service";
import { TodoController } from "./todo/todo.controller";
import { UserController } from "./user/user.controller";


const todoRepository = getRepository(Todo);
const userRepository = getRepository(User);

const todoService = new TodoService(todoRepository, userRepository);
const userService = new UserService(userRepository);

const todoController = new TodoController(todoService);
const userController = new UserController(userService);

const routes = Router();

routes.get("/todo", todoController.findOne);
routes.get("/todos", todoController.findAll);
routes.post("/todos", todoController.create);

routes.get("/user", userController.findOne);
routes.post("/users", userController.create);

export { routes };