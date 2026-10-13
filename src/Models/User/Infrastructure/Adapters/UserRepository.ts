import { IUserRepository } from "../../Domain/Port/IUserRepository";
import { User } from "../../Domain/Entities/User";
import { prismaClient } from "../.././../../Infrastructure/repository/db";

export class UserRepository implements IUserRepository {

  async create(user: User): Promise<User> {
    const userCreated = await prismaClient.user.create({
      data: {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        passwordHash: user.passwordHash,
        phone: user.phone,
        createdAt: user.createdAt,
      },
    });

    return User.reconstitute(userCreated);
  }

  async findByEmail(email: string): Promise<User | null> {
    const userFound = await prismaClient.user.findUnique({ where: { email } });

    if (!userFound) {
      return null
    }

    return User.reconstitute(userFound);
  }
}
