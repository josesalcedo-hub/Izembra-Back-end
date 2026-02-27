import { IUserRepository } from "../../Domain/Repositories/IUserRepository";
import { User } from "../../Domain/Entities/User";
import { prismaClient } from "../.././../../Infrastructure/repository/db";
import { CreateUserDTO } from "../../Application/dtos/CreateUserDTO";

export class UserRepository implements IUserRepository {
  async create(user: CreateUserDTO): Promise<User> {
    const createdUser = await prismaClient.user.create({ data: user });

    return new User(
      createdUser.id,
      createdUser.name,
      createdUser.lastname,
      createdUser.email,
      createdUser.password,
      createdUser.phone,
      createdUser.createdAt,
    );
  }

  async findByEmail(email: string): Promise<User> {
    const userFound = await prismaClient.user.findUnique({where: {email}})

    if(!userFound){
      throw new Error("Usuario no encontrado")
    }
    return new User(
      userFound.id,
      userFound.name,
      userFound.lastname,
      userFound.email,
      userFound.password,
      userFound.phone,
      userFound.createdAt
    ) 
  }
}
