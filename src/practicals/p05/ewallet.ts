import { PaymentMethod } from "./payment-method";
export class EWallet extends PaymentMethod{
    private walletId: string;
    static FEE = 1/100;
    constructor(name: string , wallet: string){
        super(name);
        this.walletId = wallet;
    }
    processPayment(amount: number): boolean {
        console.log(`Cutting e-wallet balance:${amount} Baht`)
        return true;
    }
    getPaymentFee(amount: number): number {
        return amount * EWallet.FEE;
    }
}
