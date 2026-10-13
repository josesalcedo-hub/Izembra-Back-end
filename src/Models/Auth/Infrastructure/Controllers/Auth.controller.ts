import { LoginUseCase } from "../../Application/UseCaseLogin/LoginUseCase";
import { schemaLogin } from "../../Application/schemas/LoginSchema";
import { Request, Response } from "express";

export class AuthController {

  constructor(private loginUseCase: LoginUseCase) {
  }

  async login(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const result = schemaLogin.safeParse(data);

    if (!result.success) {
      return res.status(401).json({
        error: result.error.issues,
      });
    }

    try {
      const aut = await this.loginUseCase.execute(result.data);
      return res.status(200).json({
        message: "Usuario autenticado",
        token: aut,
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Error interno del servidor";

      return res.status(401).json({
        error: message,
      });
    }
  }
}
