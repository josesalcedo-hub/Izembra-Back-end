import { Router } from "express";
import { PaymentController } from "../controller/Payment.controller";
export const router = Router();
const paymentController = new PaymentController();

router.post("/Payment", paymentController.sessionCreate.bind(paymentController))