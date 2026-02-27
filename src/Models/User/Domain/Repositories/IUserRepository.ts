import { CreateUserDTO } from "../Entities/CreateUserDTO";
import { User } from "../Entities/User";
export interface IUserRepository {
  create(user: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
