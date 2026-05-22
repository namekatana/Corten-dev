import { useEffect, useState } from 'react'
import './HeroStatusTypewriter.css'

const statusText = 'Available for projects · 2026'
const charDelayMs = 42

type HeroStatusTypewriterProps = {
  active: boolean
}

export function HeroStatusTypewriter({ active }: HeroStatusTypewriterProps) {
  const [display, setDisplay] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(false)

  useEffect(() => {
    if (!active) {
      setDisplay('')
      setTypingDone(false)
      setCursorVisible(false)
      return
    }

    let index = 0
    setDisplay('')
    setTypingDone(false)
    setCursorVisible(true)

    const typeTimer = window.setInterval(() => {
      index += 1
      setDisplay(statusText.slice(0, index))
      if (index >= statusText.length) {
        window.clearInterval(typeTimer)
        setTypingDone(true)
      }
    }, charDelayMs)

    return () => window.clearInterval(typeTimer)
  }, [active])

  useEffect(() => {
    if (!typingDone) {
      return
    }

    const hideTimer = window.setTimeout(() => {
      setCursorVisible(false)
    }, 1000)

    return () => window.clearTimeout(hideTimer)
  }, [typingDone])

  if (!active && display.length === 0) {
    return null
  }

  return (
    <p className="heroStatusTypewriter">
      {display}
      <span
        className={
          cursorVisible ? 'heroStatusCursor' : 'heroStatusCursorHidden'
        }
        aria-hidden="true"
      />
    </p>
  )
}
