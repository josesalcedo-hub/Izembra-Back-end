import { User } from "../Entities/IUser";
export interface IUserRepository {
  create(user: User): Promise<User>;
}
