import { genSalt, hash } from "bcrypt";
import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {

  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async create(request:Request, response:Response) {
    const { name, email, password } = request.body;

    const salt = await genSalt(10);
    const passwordEncrypted  = await hash(password, salt);

    const newUser = await this.userService.create(name, email, passwordEncrypted);

    if (newUser instanceof Error) {
      return response.status(400).json(newUser.message);
    }

    return response.json(newUser);
  }

  async findOne(request: Request, response: Response) {
    const { userId } = request.body;

    const user = await this.userService.findOne(userId);
    
    return response.json(user);
  }

}