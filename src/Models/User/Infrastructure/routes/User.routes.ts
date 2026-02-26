import { Router } from "express";
import { CUserController } from "../Controllers/CUser.Controller";

export const router = Router();
const CreateUser = new CUserController();

//Centramos las URL de la entidad USER para la navegacion,  asociando los métodos HTTP(GET, POST, PUT, DELETE) con las acciones especificas

//Crear Usuario
router.post("/SingUp", CreateUser.createUser.bind(CreateUser));