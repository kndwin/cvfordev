import * as Panelbear from '@panelbear/panelbear-js'
import { useRouter } from 'next/dist/client/router'
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

export const usePanelBear = (site: string, config = {}) => {
  const router = useRouter()
  useEffect(() => {
    Panelbear.load(site, config)
    Panelbear.trackPageview()
    const handleRouteChange = () => Panelbear.trackPageview()
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
}
