import { ITokenPayload } from "./ITokenPayload";

export interface ITokenServices{
    generate(payload:ITokenPayload):string
}