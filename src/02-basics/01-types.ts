let someString: string = 'Hello World!';
let someBoolean: boolean = true;
let someNumber: number = 4711;
let anotherNumber: number = 4.5
let notANumberButStillTypeNumber: number = Number('Hallo')

let thisCanBeAny: any;
let someStringArray: string[] = ['red', 'green', 'blue']
let someAnyArray: any[] = ['a string', 5, false];
let thisIsUnknown: unknown = 'maybe a string';
let letterCountFunc: (word: string) => number = (name) => name.length
let stringOrNumber: string | number = Math.random() > 0.5 ? 'near to 1' : 0

let thisIsStatic: 'Static' = 'Static'
const thisIsStaticToo = 'Static'

let thisIsUndefined: undefined = undefined;
let thisIsNull: null = null;

let someObject: {
  name: string,
  age: number,
} = {
  name: 'John',
  age: 42,
}

const anotherObject: typeof someObject = {name: 'Hallo', age: 2}

type Person = {
  name: string,
  age: number,
}

interface OnlineIdentity {
  email: string
}

type User = Person & OnlineIdentity
interface IUser extends Person, OnlineIdentity {}

const user: User = {
  name: 'John',
  age: 42,
  email: 'john@example.com'
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
