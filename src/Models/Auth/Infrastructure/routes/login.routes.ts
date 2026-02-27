import { Router } from "express";
import { AuthController } from "../Controllers/Auth.controller";

export const router = Router();

const authController = new AuthController()

router.post("/singIn", authController.login.bind(authController))