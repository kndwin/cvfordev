import { useState, useEffect } from 'react'

type MouseCoordinate = {
  x: number
  y: number
}

export const useMousePosition = (): MouseCoordinate => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const updateMousePosition = (ev: MouseEvent) => {
    setMousePosition({
      x: ev.clientX - window.innerWidth / 2,
      y: ev.clientY - window.innerHeight / 2,
    })
  }
  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
  }, [])
  return mousePosition
}
