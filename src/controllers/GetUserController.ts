import { Request, Response } from "express";
import { GetUserService } from "../services/GetUserService";

export class GetUserController {

  async handle(request: Request, response: Response) {
    const { userId } = request.body;

    const service = new GetUserService();

    const result = await service.execute(userId);
    
    return response.json(result);
  }

}