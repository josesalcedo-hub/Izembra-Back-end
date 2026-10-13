import jwt from "jsonwebtoken";
import { ITokenService } from "../../Domain/Port/ITokenService";
import { TokenPayload } from "../../Domain/Types/TokenPayload";

export class JwtTokenService implements ITokenService {
  private readonly jwtSecret: string;

  constructor() {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("Falta configurar JWT_SECRET");
    }

    this.jwtSecret = secret;
  }

  generate(payload: TokenPayload): string {
    return jwt.sign(payload, this.jwtSecret, { expiresIn: "15m" });
  }
}
