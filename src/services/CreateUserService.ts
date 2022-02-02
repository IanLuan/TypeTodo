import { getRepository } from "typeorm";
import { User } from "../entities/User";

export class CreateUserService {

  async execute(name: string, email: string, password: string): Promise<User | Error> {
    const repo = getRepository(User);

    if (await repo.findOne({email})) {
      return new Error("User already exists");
    }

    const user = repo.create({
      name,
      email,
      password
    });

    await repo.save(user);

    return user;
  }

}