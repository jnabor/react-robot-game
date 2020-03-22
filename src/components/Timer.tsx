import React, { useState, useEffect, useRef } from 'react'

import { GameState } from '../types'
import { Card } from './common'
import { TIMER_START } from '../config'

export interface TimerProps {
  timeout: () => void
  state: GameState
}

const Timer: React.SFC<TimerProps> = ({ timeout, state }) => {
  const [time, setTime] = useState(TIMER_START)
  const timerRef = useRef<number>(0)

  const timeColor = time < 10 ? '#fd2222' : '#ffffff'

  const startTimer = () => {
    setTime(TIMER_START)
    timerRef.current = setInterval(() => {
      setTime(prev => (prev > 0 ? prev - 1 : prev))
    }, 1000)
  }

  useEffect(() => {
    if (time < 1) timeout()
  }, [time])

  useEffect(() => {
    if (state === GameState.IDLE) {
      if (timerRef.current !== null) clearInterval(timerRef.current)
      setTime(TIMER_START)
    } else if (state === GameState.STARTED) {
      startTimer()
    } else if (state === GameState.OVER) {
      clearInterval(timerRef.current)
    }
  }, [state])

  return (
    <Card color={'#a2ac26'}>
      <p>
        TIME{' '}
        <span style={{ color: timeColor }}>
          {time.toString().padStart(2, '0')}
        </span>
      </p>
    </Card>
  )
}

export default Timer
