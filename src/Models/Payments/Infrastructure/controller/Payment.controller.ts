import { UsecasePayment } from "../../Application/UseCasePayment";
import { PaymentRepository } from "../Adapters/PaymentRepository";
import { Request, Response } from "express";
export class PaymentController {
  private createPayment: UsecasePayment;

  constructor() {
    const paymentRepository = new PaymentRepository();
    this.createPayment = new UsecasePayment(paymentRepository);
  }

  async sessionCreate(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    try {
      const { url } = await this.createPayment.execute(data);

      return res.status(200).json({ url });
    } catch (error: any) {
      return res
        .status(401)
        .json({ message: "hubo un error", error: error.message });
    }
  }
}
