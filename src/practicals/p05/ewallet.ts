import { PaymentMethod } from "./payment-method"
export class EWallet extends PaymentMethod {
    private cardNumber: string
    constructor(account: string , cardNumber: string){
        super(account)
        this.cardNumber = cardNumber
    }
    processPayment(amount: number): boolean {

    }
    getPaymentFee(amount: number): number {
        
    }
}
