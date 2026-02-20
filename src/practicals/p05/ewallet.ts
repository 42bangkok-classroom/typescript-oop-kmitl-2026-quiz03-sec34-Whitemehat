import { PaymentMethod } from "./payment-method"
export class EWallet extends PaymentMethod {
    private cardNumber: string
    static FEE_EWALLET : number = 1
    constructor(account: string , cardNumber: string){
        super(account)
        this.cardNumber = cardNumber
    }
    processPayment(amount: number): boolean {
        console.log(`Cutting e-wallet balance: {${amount}} Baht`)
        return true;
    }
    getPaymentFee(amount: number): number {
        return amount * (EWallet.FEE_EWALLET / 100)
    }
}
