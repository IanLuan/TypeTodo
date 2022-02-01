import { getRepository } from "typeorm";
import { User } from "../entities/User";


type UserRequest = {
  name: string,
  username: string
}

export class CreateUserService {

  async execute({ name, username }:UserRequest ): Promise<User | Error> {
    const repo = getRepository(User);

    if (await repo.findOne({username})) {
      return new Error("User already exists");
    }

    const user = repo.create({
      name,
      username
    });

    await repo.save(user);

    return user;
  }

}