import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { genSalt, hash } from "bcrypt";

export class CreateUserController {

  async handle(request:Request, response:Response) {
    const { name, email, passwd } = request.body;

    const salt = await genSalt(10);
    const password  = await hash(passwd, salt);

    const service = new CreateUserService();

    const result = await service.execute({ name, email, password });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

}