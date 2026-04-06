import { Request, Response } from "express";
import { LoginUseCase } from "../../Application/UseCaseLogin/LoginUseCase";

export class AuthController {
  constructor(private loginUseCase: LoginUseCase) {}

  async login(req: Request, res: Response): Promise<Response> {

    console.log(req.body);
    
    try {
      const { token } = await this.loginUseCase.execute(req.body);

      res.cookie("tokenAuthorized", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 1800000 * 1,
        path: "/",
      });

      return res.json({ message: "Login Exitoso"});

    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }
}
