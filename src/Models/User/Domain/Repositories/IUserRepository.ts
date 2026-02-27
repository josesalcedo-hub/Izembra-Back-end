import { CreateUserDTO } from "../../Application/dtos/CreateUserDTO";
import { User } from "../Entities/User";
export interface IUserRepository {
  create(user: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
