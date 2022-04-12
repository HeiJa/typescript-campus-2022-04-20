function hello(myVar: any) {
  if (typeof myVar === 'string') {
    console.log('String: :', myVar)
  } else if (typeof myVar === 'boolean') {
    console.log('Boolean: :', myVar)
  } else if (typeof myVar === 'number') {
    console.log('Number: :', myVar)
  }
}

hello(1)
hello('Hello World!')
hello(true)

