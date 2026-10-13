import { TokenPayload } from "../Types/TokenPayload";

export interface ITokenService{
    generate(payload:TokenPayload):string
}