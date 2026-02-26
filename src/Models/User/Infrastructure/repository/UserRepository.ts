import { IUserRepository } from "../../Domain/Repositories/IUserRepository";
import { User } from "../../Domain/Entities/User";
import { prismaClient } from "../.././../../Infrastructure/repository/db";

export class UserRepository implements IUserRepository {
    async create(user: User): Promise<User> {

        return await prismaClient.user.create({ data: user });
    }
}