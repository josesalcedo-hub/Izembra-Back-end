import { CreateUseCaseuser } from "../../Application/UseCase/CreateUseCaseUser";
import { UserRepository } from "../repository/UserRepository";
import { Request, Response } from "express";

export class CUserController {
  private createUserCase: CreateUseCaseuser;

  constructor() {
    const userRepository = new UserRepository();
    this.createUserCase = new CreateUseCaseuser(userRepository);
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const userData = req.body;

    try {
      const newUser = await this.createUserCase.execute(userData);

      return res
        .status(201)
        .json({ message: "usuario creado con exito", user: newUser });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
