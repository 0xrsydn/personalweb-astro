'use client'

import { useState, useEffect, useRef } from 'react'

interface MovingFooterProps {
  text?: string;
  speed?: number;
  fontSize?: number;
}

export default function MovingFooter({ text = "©2024 All rights reserved. Powered by 0xrsydn.", speed = 50, fontSize = 16 }: MovingFooterProps) {
  const [position, setPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const totalWidth = container.scrollWidth / 2

    const animate = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - speed / 60 // Assuming 60 FPS
        return newPosition <= -totalWidth ? 0 : newPosition
      })
    }

    const intervalId = setInterval(animate, 1000 / 60) // 60 FPS

    return () => clearInterval(intervalId)
  }, [speed])

  const repeatedText = `${text} `.repeat(20) // Increase repeat count for longer text

  return (
    <footer className="w-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 py-4 overflow-hidden">
      <div 
        ref={containerRef}
        className="whitespace-nowrap inline-block"
        style={{
          transform: `translateX(${position}px)`,
          fontSize: `${fontSize}px`,
        }}
      >
        {repeatedText}
        {repeatedText} {/* Duplicate the text to ensure seamless looping */}
      </div>
    </footer>
  )
}