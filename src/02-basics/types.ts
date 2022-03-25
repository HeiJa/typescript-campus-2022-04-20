let someString: string = 'Hello World!';
let someBoolean: boolean = true;
let someNumber: number = 4711;
let thisCanBeAny: any;
let someArray: any[] = ['a string', 5, false];

let thisIsUnknown: unknown = 'maybe a string';
let thisIsUndefined: undefined = undefined;
let thisIsNull: null = null;

type User = {
  name: string,
  age: number,
}

let user: User = {
  name: 'John',
  age: 42,
}

type Car = {
  manufacturer: string,
  engine: 'electric' | 'gas' | 'hybrid'
  power: number
}

const tesla: Car = {
  manufacturer: 'Tesla',
  engine: 'electric',
  power: 250
}

const audi: Car = {
  manufacturer: 'Audi',
  engine: 'gas',
  power: 400
}

const printCarDetails = (car: Car) => {
  console.log(
    `A Car from ${car.manufacturer}, powered by a ${car.engine} engine with ${car.power} horse power.`
  )
}

printCarDetails(tesla)
printCarDetails(audi)
