import { CreateUserDTO } from "../../Domain/Entities/CreateUserDTO";
import { User } from "../../Domain/Entities/User";
import { IUserRepository } from "../../Domain/Repositories/IUserRepository";
import bcrypt from "bcrypt";

export class CreateUseCaseuser {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(userData: CreateUserDTO): Promise<User> {
    
    const hashedPasswaord = await bcrypt.hash(userData.password, 10);

    const newUser = await this.userRepository.create({
      ...userData,
      password: hashedPasswaord,
    });

    return newUser;
  }
}
