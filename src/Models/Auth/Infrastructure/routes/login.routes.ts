import { Router } from "express";
import { createAuthController } from "../authFactory";

export const routerLogin = Router();
const controller = createAuthController();

routerLogin.post("/login", controller.login.bind(controller));

