type OfficeLocation =
  'New York' | 'London' | 'Paris' | 'Wermelskirchen'
type Address = {
  city: OfficeLocation
  zip: string
  street?: string
}

/** Record */
type Offices = Record<OfficeLocation, Address>
const offices: Offices = {
  'New York': {city: 'New York', zip: '12345'},
  'London': {city: 'London', zip: '12345'},
  'Paris': {city: 'Paris', zip: '12345'},
  'Wermelskirchen': {city: 'Wermelskirchen', zip: '42929'},
}

/** Partial */
const openOffices: Partial<Offices> = {
  'Paris': {city: 'Paris', zip: '12345'},
  'Wermelskirchen': {city: 'Wermelskirchen', zip: '42929'},
}

/** Required */
const completeOfficeAdress: Required<Address> = {
  city: 'Wermelskirchen',
  zip: '42929',
  street: 'Industriestraße 10',
}

/** Pick */
type OnlyWermelskirchen = Pick<Offices, 'Wermelskirchen'>
const wermelskirchenOffice: OnlyWermelskirchen = {
  'Wermelskirchen': {city: 'Wermelskirchen', zip: '42929'},
}

/** Omit */
type OnlyEu = Omit<Offices, 'New York' | 'London'>
const euOffices: OnlyEu = {
  'Paris': {city: 'Paris', zip: '12345'},
  'Wermelskirchen': {city: 'Wermelskirchen', zip: '42929'},
}

/** ReturnType */
function getZip(address: Address) {
  return address.zip
}
type Zip = ReturnType<typeof getZip> // -> string
