import { Request, Response } from "express";
import { CreateTodoService } from "../services/CreateTodoService";

export class CreateTodoController {

  async handle(request: Request, response: Response) {
    const { title, description, userId } = request.body;

    const service = new CreateTodoService();

    const result = await service.execute(title, description, userId);

    return response.json(result);
  }

}