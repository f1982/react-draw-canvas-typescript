import React from 'react'
import useDrawCanvas from './useDrawCanvas'

interface DrawCanvasProps extends React.HTMLProps<HTMLCanvasElement> {
  draw: (canvas: HTMLCanvasElement, frameCount: number) => void,
}
export default function DrawCanvas({ draw, ...rest }: DrawCanvasProps) {

  const canvasRef = useDrawCanvas(draw)

  return (
    <canvas {...rest} ref={canvasRef} />
  )
}
