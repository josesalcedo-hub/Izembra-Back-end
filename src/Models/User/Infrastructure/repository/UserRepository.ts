import { IUserRepository } from "../../Domain/Repositories/IUserRepository";
import { User } from "../../Domain/Entities/User";
export class UserRepository implements IUserRepository{

    async create(user:User):Promise<User>{
        return user
    }
}