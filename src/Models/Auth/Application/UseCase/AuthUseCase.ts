import { User } from "@/Models/User/Domain/Entities/User";
import { ITokenServices } from "../../Domain/Repositories/ITokenServices";

export class AuthUseCase{
    constructor (private tokenServices: ITokenServices ){}

    generateToken(user:User):string{
        return this.tokenServices.generate({
            id: user.id,
            email:user.email
        })
    }
}