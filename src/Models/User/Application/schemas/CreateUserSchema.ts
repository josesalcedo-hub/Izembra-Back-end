import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "El nombre es obligatprio"),
  lastname: z.string().min(1, "El apellido es obligatorio"),
  email: z.string().email("El email no es váliido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  phone: z
    .string()
    .min(
      10,
      "lstEl teléfono debe incluir el código de país, por ejemplo: +573001234567",
    )
    .max(13, "El telefono debe tener maximo 13 caracteres"),
});
