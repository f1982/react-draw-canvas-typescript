import React from 'react'
import useDrawCanvas, { DrawFunctionType } from './useDrawCanvas'

interface DrawCanvasProps extends React.HTMLProps<HTMLCanvasElement> {
  draw: DrawFunctionType,
}
export default function DrawCanvas({
  draw,
  ...rest
}: DrawCanvasProps) {
  const canvasRef = useDrawCanvas(draw)

  return (
    <canvas ref={canvasRef} {...rest}/>
  )
}
