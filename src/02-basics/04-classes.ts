// @ts-nocheck
// noinspection JSConstantReassignment

class Customer {
  constructor(
    public readonly name: string,
    public age: number,
    private creditCardNumber: string
  ) {}

  verifyCreditCardNumber(cardNumber: string): boolean {
    return this.creditCardNumber === cardNumber
  }
}

let peter: Customer
peter.age = 5 // Error

peter = new Customer('Peter', 40, '1234-5648-9012-3456')
peter.name = 'Otto' // Error
peter.age = peter.age + 1
console.log(peter.creditCardNumber) // Error
peter.verifyCreditCardNumber('0000-0000-0000-0000') // -> false
