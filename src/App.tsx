import React from 'react';
import DrawCanvas from './comp/DrawCanvas';
import { drawLife } from './DrawLife';
function App() {

  const draw = (canvas: HTMLCanvasElement, frameCount: number) => {

    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    ctx.fill()
  }

  return (
    <>
    <DrawCanvas style={{ width: '100%', height: '100vh' }} draw={drawLife} />
    <div style={{ position:'absolute', top:0, left:0, bottom:0, right:0}}>
      <h1 style={{color:'#ffffff', fontSize:'10rem', textAlign:'center'}}>ANDY CAO</h1>
    </div>
    </>
  );
}

export default App;
