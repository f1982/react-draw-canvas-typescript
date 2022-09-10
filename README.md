# React Canvas Functional Component

This is the component for easily integrating canvas and React components

## How to use

- Copy `components/DrawCanvas` folder to your project

- Create a draw function 

```js
const drawSomthing: DrawFunctionType = (canvas: HTMLCanvasElement, frame: number) => {

  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // draw a ball
  ctx.fillStyle = 'yellow'
  ctx.beginPath()
  ctx.arc(
    canvas.width / window.devicePixelRatio / 2,
    canvas.height / window.devicePixelRatio / 2,
    20 * Math.sin(frame * 0.05) ** 2 + 10,
    0,
    2 * Math.PI)
  ctx.fill()
}

```

- Pass this draw function to the component

```js
<DrawCanvas draw={drawSomthing} />
```