import { Payable } from "./payable";
export abstract class PaymentMethod implements Payable{
    protected accountName: string;
    constructor(name: string){
        this.accountName = name;
    }
    getAccountName(){
        return this.accountName;
    }
    abstract processPayment(amount: number): boolean
    abstract getPaymentFee(amount: number): number
}
