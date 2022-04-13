class CPerson {
  constructor(
    public name: string,
    private _id: number
  ) {}

  get id() {
    return this._id
  }
  set id(id) {
    this._id = id
  }
}

class CUser extends CPerson {
  constructor(public email: string, name: string, id: number) {
    super(name, id);
  }
}

const max = new CUser('max@example.com', 'Max', 25)
const id = max.id
max.email = 'max-neue-email@example.com'
