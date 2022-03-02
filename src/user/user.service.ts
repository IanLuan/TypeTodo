import { getRepository, Repository } from "typeorm";
import { User } from "./user.entity";

export class UserService {

  private userRepository: Repository<User>;

  constructor(userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  async create(name: string, email: string, password: string): Promise<User | Error> {

    if (await this.userRepository.findOne({email})) {
      return new Error("User already exists");
    }

    const newUser = this.userRepository.create({
      name,
      email,
      password
    });

    await this.userRepository.save(newUser);

    return newUser;
  }

  async findOne(userId: string): Promise<User> {
    return await this.userRepository.findOne(userId);
  }



}