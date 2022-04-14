const myText = document.getElementById('myText') as HTMLInputElement
const myButton = document.getElementById('myButton') as HTMLButtonElement
const myCanvas = document.getElementById('myCanvas') as HTMLCanvasElement
myButton.addEventListener('click', ev => {
  console.log('Hello');
  ev.preventDefault()
  const ctx = myCanvas.getContext("2d")
  if (ctx) {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    const grd = ctx.createLinearGradient(0, 0, 500, 0);
    grd.addColorStop(0, "orange");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.font = "30px Arial"
    ctx.strokeText(myText.value, 50, 50)
  } else {
    console.error('something went wrong')
  }
})
