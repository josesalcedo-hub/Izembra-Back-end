import { Router, Request, Response } from "express";
import { CProperty } from "../Controller/Property.controller";

export const router = Router();
const controller = new CProperty();

// Usar una función flecha evita errores de contexto (this) y de tipos de retorno
router.get("/foundData", (req: Request, res: Response) => {
    controller.findAllData(req, res);
});

router.get("/foundData/:id", (req:Request, res:Response)=>{
    controller.findById(req, res)
})