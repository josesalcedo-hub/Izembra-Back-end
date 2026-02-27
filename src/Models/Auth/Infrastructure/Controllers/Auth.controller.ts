import { UserRepository } from "@/Models/User/Infrastructure/repository/UserRepository";
import { Request, Response } from "express";
import { LoginUseCase } from "../../Application/UseCase/LoginUseCase";
import { AuthUseCase } from "../../Application/UseCase/AuthUseCase";
import { JwtTokenServices } from "../Repository/jwt";
export class AuthController {
  constructor(private loginUseCase: LoginUseCase) {}

  async login(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    try {
      const { token } = await this.loginUseCase.execute(email);

      return res.json({ message: "Login Exitoso", token });
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }
}