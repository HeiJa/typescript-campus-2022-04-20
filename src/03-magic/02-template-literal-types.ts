type Direction = 'top' | 'bottom' | 'left' | 'right'
type CssProperty = 'margin' | 'padding'
type Property = `${CssProperty}-${Direction}`

const myProp: Property = 'margin-bottom'
