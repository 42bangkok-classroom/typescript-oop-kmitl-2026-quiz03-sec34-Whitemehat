import { PaymentMethod } from "./payment-method";
export class CreditCard extends PaymentMethod {
    private cardNumber: string;
    static FEE = 2/100;
    constructor(name: string , card: string){
        super(name);
        this.cardNumber = card;
    }
    processPayment(amount: number): boolean {
        console.log(`Cutting credit card balance:${amount} Baht`)
        return true;
    }
    getPaymentFee(amount: number): number {
        return amount * CreditCard.FEE;
    }
}
