import { Router } from "express";
import { AuthController } from "../Controllers/Auth.controller";
import { UserRepository } from "@/Models/User/Infrastructure/repository/UserRepository";
import { JwtTokenServices } from "../Repository/jwt";
import { LoginUseCase } from "../../Application/UseCase/LoginUseCase";
import { AuthUseCase } from "../../Application/UseCase/AuthUseCase";
export const router = Router();

const userRepository = new UserRepository();
const tokenServices = new JwtTokenServices();
const authServices = new AuthUseCase(tokenServices)
const loginUseCase = new LoginUseCase(userRepository, authServices);

const authController = new AuthController(loginUseCase)

router.post("/singIn", authController.login.bind(authController));
