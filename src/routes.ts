import { Router } from "express";
import { CreateTodoController } from "./controllers/CreateTodoController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllTodosController } from "./controllers/GetAllTodosController";
import { GetTodoController } from "./controllers/GetTodoController";
import { GetUserController } from "./controllers/GetUserController";

const routes = Router();

routes.get("/todo", new GetTodoController().handle);
routes.get("/user", new GetUserController().handle);
routes.get("/todos", new GetAllTodosController().handle);

routes.post("/users", new CreateUserController().handle);
routes.post("/todos", new CreateTodoController().handle);




export { routes };