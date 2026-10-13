import { Payment } from "../Domain/Entities/PaymentDTO";
import { IPayment } from "../Domain/Port/IPaymentProvider";

export class UsecasePayment {
  private paymentRepository: IPayment;

  constructor(paymentRespository: IPayment) {
    this.paymentRepository = paymentRespository;
  }

  async execute(paymentData: Payment) {
    const sessionCreated = await this.paymentRepository.createSession(paymentData);
    return sessionCreated;
  }
}
