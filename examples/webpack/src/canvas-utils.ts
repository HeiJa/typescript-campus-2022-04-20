import {Color} from './color';

export const clearCanvas = (canvas: HTMLCanvasElement): void => {
  const ctx = canvas.getContext("2d")
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
export const fillCanvasWithGradient = (
  canvas: HTMLCanvasElement,
  firstColor: Color,
  secondColor: Color
): void => {
  const ctx = canvas.getContext("2d")
  if (ctx) {
    const grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
    grd.addColorStop(0, firstColor);
    grd.addColorStop(1, secondColor);
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
export const writeToCanvas = (canvas: HTMLCanvasElement, text: string): void => {
  const ctx = canvas.getContext("2d")
  if (ctx) {
    ctx.font = "30px Arial"
    ctx.strokeText(text, 50, 50)
  }
}
