import { Router, Request, Response } from "express";
import { ControllerProject } from "../Controller/Property.controller";

export const routerProject = Router();
const controller = new ControllerProject();

// Usar una función flecha evita errores de contexto (this) y de tipos de retorno
routerProject.get("/projects", controller.findAllData.bind(controller));

routerProject.get("/projects/:id", controller.findProjectById.bind(controller));