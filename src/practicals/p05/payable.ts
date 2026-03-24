export interface Payable {
  processPayment(amount: number) : boolean
  getPaymentFee(amount: number): number
}
