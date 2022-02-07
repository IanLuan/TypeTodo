import { Request, Response } from "express";
import { GetAllTodosService } from "../services/GetAllTodosService";

export class GetAllTodosController {

  async handle(request: Request, response: Response) {
    const { userId } = request.body;

    const service = new GetAllTodosService();

    const result = await service.execute(userId);

    return response.json(result)
  }

}