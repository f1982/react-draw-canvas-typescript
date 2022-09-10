const drawSomthing = (canvas: HTMLCanvasElement, frameCount: number) => {

  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  ctx.fillStyle = '#000000'
  ctx.beginPath()
  ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
  ctx.fill()
}

export default drawSomthing;