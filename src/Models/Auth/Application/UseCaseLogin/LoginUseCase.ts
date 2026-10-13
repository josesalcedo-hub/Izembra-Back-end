import { IUserRepository } from "@/Models/User/Domain/Port/IUserRepository";
import { ITokenService } from "../../Domain/Port/ITokenService";
import { LoginDTO } from "../dtos/LoginDTO";
import bcrypt from "bcrypt";

export class LoginUseCase {
  private tokenService: ITokenService;
  private userRepository: IUserRepository;
  
  constructor(tokenService: ITokenService, userRepository: IUserRepository) {
    this.tokenService = tokenService;
    this.userRepository = userRepository;
  }

  async execute(payload: LoginDTO): Promise<{ token: string }> {
    const userFound = await this.userRepository.findByEmail(payload.email);

    if (userFound === null) {
      throw new Error("Credenciales inválidas");
    }

    const isPasswordValid = await bcrypt.compare(
      payload.password,
      userFound.passwordHash,
    );

    if (!isPasswordValid) {
      throw new Error("Credenciales inválidas");
    }

    const payloadToken = { id: userFound.id, email: userFound.email };

    const token = this.tokenService.generate(payloadToken);
    return { token };
  }
}
