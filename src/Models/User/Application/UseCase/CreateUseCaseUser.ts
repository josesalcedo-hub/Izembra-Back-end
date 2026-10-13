import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { User } from "../../Domain/Entities/User";
import { IUserRepository } from "../../Domain/Port/IUserRepository";
import bcrypt from "bcrypt";
export class CreateUseCaseuser {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async create(userData: CreateUserDTO): Promise<User> {
    const { password } = userData;
    const passwordHash = await bcrypt.hash(password, 10);

    const createUserProps = {
      name: userData.name,
      lastname: userData.lastname,
      email: userData.email,
      passwordHash,
      phone: userData.phone,
    };

    const user = User.create(createUserProps);

    const userCreated = await this.userRepository.create(user);

    return userCreated

  }
}
