import { PaymentMethod } from "./payment-method"
export class EWallet extends PaymentMethod {
    private walletid: string
    static FEE_EWALLET : number = 1
    constructor(account: string , walletid: string){
        super(account)
        this.walletid = walletid
    }
    processPayment(amount: number): boolean {
        console.log(`Cutting e-wallet balance: {${amount}} Baht`)
        return true;
    }
    getPaymentFee(amount: number): number {
        return amount * (EWallet.FEE_EWALLET / 100)
    }
}
