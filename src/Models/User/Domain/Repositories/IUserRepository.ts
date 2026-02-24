import { User } from "../Entities/User";
export interface IUserRepository {
  create(user: User): Promise<User>;
}
