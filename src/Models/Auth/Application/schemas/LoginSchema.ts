import {email, z} from "zod";

export const schemaLogin = z.object({
    email: z.string().email("El email no es valido"),
    password: z.string().min(8, "La contraseña debe ser al menos 8 caracteres"),
});