import { IUserRepository } from "../../Domain/Repositories/IUserRepository";
import { User } from "../../Domain/Entities/User";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()
export class UserRepository implements IUserRepository{

    async create(user:User):Promise<User>{
        return await prisma.user.create({data: user})   
    }
}