import { IUserRepository } from "@/Models/User/Domain/Repositories/IUserRepository";
import { AuthUseCase } from "../UseCase/AuthUseCase";
import { ITokenPayload } from "../../Domain/Repositories/ITokenPayload";
import bcrypt from "bcrypt";

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private authUseCase: AuthUseCase,
  ) {}
  async execute(payload: ITokenPayload): Promise<{ token: string }> {
    const { email, password } = payload;

    const user = await this.userRepository.findByEmail(email[0]);
    if (!user) throw new Error("Email Invalido");

    const isPasswordValid = await bcrypt.compare(password[0], user.password);

    if (!isPasswordValid) {
      throw new Error("Credential invalid");
    }

    const token = this.authUseCase.generateToken(user);

    return { token };
  }
}
