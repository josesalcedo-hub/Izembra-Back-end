
import { UserRepository } from "@/Models/User/Infrastructure/Adapters/UserRepository";
import { LoginUseCase } from "../Application/UseCaseLogin/LoginUseCase";
import { JwtTokenService } from "./Adapters/jwt";
import { AuthController } from "./Controllers/Auth.controller";

export function createAuthController(): AuthController {
  const userRepository = new UserRepository();
  const jwtTokenService = new JwtTokenService();

  const loginUseCase = new LoginUseCase(
    jwtTokenService,
    userRepository,
  );

  return new AuthController(loginUseCase);
}
