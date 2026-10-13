import Stripe from "stripe";
import { Payment } from "../../Domain/Entities/PaymentDTO";
import { IPayment } from "../../Domain/Port/IPaymentProvider";

const stripe = new Stripe(
  "",
);

export class PaymentRepository implements IPayment {
  async createSession(paymentData: Payment): Promise<any> {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {
              name: paymentData.name,
            },
            currency: paymentData.currency ?? "usd",
            unit_amount: paymentData.amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url:
        "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/cancel",
    });
    console.log(session.id);
    console.log(session);
    return session;
  }
}
