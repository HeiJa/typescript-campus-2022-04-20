import {clearCanvas, fillCanvasWithGradient, writeToCanvas} from './canvas-utils';

const handleClick: EventListener = (ev) => {
  const myText = document.getElementById('myText') as HTMLInputElement
  const myCanvas = document.getElementById('myCanvas') as HTMLCanvasElement
  console.log('Hello');
  ev.preventDefault()
  clearCanvas(myCanvas)
  fillCanvasWithGradient(myCanvas, 'orange', 'white')
  writeToCanvas(myCanvas, myText.value)
}

const myButton = document.getElementById('myButton') as HTMLButtonElement

myButton.addEventListener('click', handleClick)
