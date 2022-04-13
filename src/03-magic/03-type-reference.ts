type Identification = {
  id: number
  name: string
}
type IdType = Identification['id']
type Identifier = Identification[keyof Identification]

type sizes = ['XS', 'S', 'M', 'L', 'XL']
type SizeSmall = sizes[1]
type Size = sizes[number]



