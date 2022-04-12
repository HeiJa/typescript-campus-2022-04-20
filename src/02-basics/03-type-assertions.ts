const element = document.getElementById('my-image')
// @ts-ignore
element.src = 'https://imgix.obi.de/api/disc/cms/public/dam/home/category-gartenundfreizeit4x.jpg' // throws error

const image = document.getElementById('my-image') as HTMLImageElement
image.src = 'https://imgix.obi.de/api/disc/cms/public/dam/home/category-gartenundfreizeit4x.jpg' // ok

const image2 = <HTMLImageElement>document.getElementById('my-image') // same as above



