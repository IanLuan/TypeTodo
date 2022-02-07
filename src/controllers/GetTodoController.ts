import { Request, Response } from "express";
import { GetTodoService } from "../services/GetTodoService";

export class GetTodoController {

  async handle(request: Request, response: Response) {
    const { todoId } = request.body;

    const service = new GetTodoService();

    const result = await service.execute(todoId);

    return response.json(result);
  }

}