import { UserRepository } from "@/Models/User/Infrastructure/repository/UserRepository";
import { Request, Response } from "express";
import { LoginUseCase } from "../../Application/UseCase/LoginUseCase";
import { AuthUseCase } from "../../Application/UseCase/AuthUseCase";
import { JwtTokenServices } from "../Repository/jwt";

export class AuthController {
  async login(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const userRepository = new UserRepository();
    const tokenServices = new JwtTokenServices();
    const authuseCase = new AuthUseCase(tokenServices);
    const loginUseCase = new LoginUseCase(userRepository, authuseCase);

    try {
      const { token } = await loginUseCase.execute(email);

      return res.json({ message: "Login Exitoso", token });

    } 
    catch (error: any) 
    {
      return res.status(404).json({ message: error.message });
    }
  }
}
