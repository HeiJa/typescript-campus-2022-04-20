interface Fish {
  swim(): void
}
interface Bird {
  fly(): void
}
const fish: Fish = {
  swim() {
    console.log('Fish swims')
  }
}
const bird: Bird = {
  fly() {
    console.log('Bird flies')
  }
}
function act(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim()
  } else {
    animal.fly()
  }
}

const isFish = (fish: any): boolean => {
  return typeof fish.swim === 'function'
}
// const isFish = (fish: any): fish is Fish => {
//   return typeof fish.swim === 'function'
// }
