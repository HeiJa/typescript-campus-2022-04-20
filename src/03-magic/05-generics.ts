type Currency = '$' | '€' | '£'
type Price<C extends Currency> = {
  [key in C]: number
}

const price: Price<'$'> = {
  $: 99
}



class Item {
  public name: string = 'Item'
}
class Dice extends Item {
  public name: string = 'Dice'
  roll() {}
}
class GameFigur extends Item {
  public name: string = 'GameFigur'
  go() {}
}

class Box<I extends Item> {
  constructor(private _item: I) {
    console.log(_item.name);
  }
  get item() {
    return this._item
  }
}

const diceBox = new Box(new Dice())
const figurBox = new Box(new GameFigur())

