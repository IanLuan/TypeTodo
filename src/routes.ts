import { Router } from "express";
import { CreateTodoController } from "./controllers/CreateTodoController";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router();

routes.post("/users", new CreateUserController().handle);

routes.post("/todos", new CreateTodoController().handle);

export { routes };