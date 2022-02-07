import { getRepository } from "typeorm";
import { User } from "../entities/User";

export class GetUserService {

  async execute(userId: string): Promise<User> {
    const userRepo = getRepository(User);

    const user = await userRepo.findOne(userId);

    return user;
  }

}