type DynamicMap = {
  [key: string]: string
}
const foo: DynamicMap = {
  bar: 'baz',
  baz: 0, // Error
}

const countries = ['at', 'ch', 'cz', 'de', 'hu', 'it', 'pl', 'sk'] as const
type Country = typeof countries[number]

type CountryConfig = {
  [key in Country]?: string
}
const config: CountryConfig = {
  at: 'https://www.obi.at',
}

