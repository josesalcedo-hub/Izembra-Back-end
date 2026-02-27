import jwt from "jsonwebtoken"
import { ITokenServices } from "../../Domain/Repositories/ITokenServices";
import { ITokenPayload } from "../../Domain/Repositories/ITokenPayload";

export class JwtTokenServices implements ITokenServices{
    private jwtsecret = process.env.JWT_SECRET as string;
    
    generate(payload: ITokenPayload): string {
        return jwt.sign(payload, this.jwtsecret, {expiresIn: "15m"})
    }
}