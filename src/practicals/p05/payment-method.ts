import { Payable } from "./payable"
export abstract class PaymentMethod implements Payable {
    protected accountName: string

    constructor(account: string){
        this.accountName = account
    }
    getAccountName():string{
        return this.accountName
    }
    abstract processPayment(amount: number): boolean
    abstract getPaymentFee(amount: number): number 
}
