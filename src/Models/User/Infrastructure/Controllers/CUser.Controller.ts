import { CreateUseCaseuser } from "../../Application/UseCase/CreateUseCaseUser";
import { UserRepository } from "../Adapters/UserRepository";
import { Request, Response } from "express";
import { schema } from "../../Application/schemas/CreateUserSchema";
export class CUserController {
  private createUserCase: CreateUseCaseuser;
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
    this.createUserCase = new CreateUseCaseuser(this.userRepository);
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const result = schema.safeParse(data);

    if (result.success) {
      try {
        const newUser = await this.createUserCase.create(result.data);

        // Excluimos el hash de la contraseña de la respuesta
        const { passwordHash, ...newWithoutPassword } = newUser;

        return res.status(201).json({
          message: "usuario creado con exito",
          user: newWithoutPassword,
        });
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : "Error interno del servidor";
        return res.status(500).json({
          error: message,
        });
      }
    } else {
      return res.status(400).json({
        error: result.error.issues,
      });
    }
  }
}
