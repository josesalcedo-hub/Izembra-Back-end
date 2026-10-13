import { Payment } from "../Entities/PaymentDTO";


export interface IPayment{
    createSession(paymentData:Payment): Promise<any>;
}