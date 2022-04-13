type Thing<T = string | number> = {
  value: T
}
type NumericThing = Thing<number>
type StringThing = Thing<string>
type TypeOfThing<I extends Thing> = I extends Thing<infer T> ? T : never

const nItem: TypeOfThing<NumericThing> = 2
const sItem: TypeOfThing<StringThing> = 'string'


