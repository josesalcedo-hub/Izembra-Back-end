import { IUserRepository } from "@/Models/User/Domain/Repositories/IUserRepository";
import { AuthUseCase } from "./AuthUseCase";

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private authUseCase: AuthUseCase,
  ) {}
  async execute(email: string): Promise<{ token: string }> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error("Email Invalido");

    const token = this.authUseCase.generateToken(user);

    return { token };
  }
}
