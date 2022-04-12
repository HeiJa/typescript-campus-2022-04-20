class Customer {
  constructor(
    public readonly name: string,
    public age: number,
    private creditCardNumber: string
  ) {}
}

const peter = new Customer('Peter', 40, '1234-5648-9012-3456')

peter.name = 'Otto' // Error
peter.age = peter.age + 1
console.log(peter.creditCardNumber) // Error
