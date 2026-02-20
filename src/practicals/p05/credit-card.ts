import { PaymentMethod } from "./payment-method"
export class CreditCard extends PaymentMethod {
    private cardNumber: string
    static FEE_CREDITCARD : number = 2
    constructor(account: string , cardNumber: string){
        super(account)
        this.cardNumber = cardNumber
    }
    processPayment(amount: number): boolean {
        console.log(`Cutting credit card balance: ${amount} Baht`)
        return true;
    }
    getPaymentFee(amount: number): number {
        return amount * (CreditCard.FEE_CREDITCARD / 100)
    }
}
