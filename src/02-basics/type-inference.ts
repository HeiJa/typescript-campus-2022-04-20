let aString: string = 'Hello World!'

type User1 = { name: string, age: number };
type CbFunc = (name: string, age: number) => User1

const myFunc: CbFunc = (name: string, age: number) => ({name, age})
/**
const myFunc = (name: string, age: number) => {
  return {
    name: name,
    age: age,
  }
}
*/

const user1 = myFunc('Jan', 29)
