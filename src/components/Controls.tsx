import React, { useEffect } from 'react'
import styled from 'styled-components'

import { GameState } from '../types'
import { Button } from './common'

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
`

export interface ControlsProps {
  rotateLeft: () => void
  rotateRight: () => void
  moveForward: () => void
  state: GameState
}

const Controls: React.SFC<ControlsProps> = ({
  rotateLeft,
  rotateRight,
  moveForward,
  state,
}) => {
  let hndlr: any = null
  const keyEventHandler = (e: any) => {
    if (hndlr !== null) {
      return
    }

    hndlr = setTimeout(() => {
      if (e.key === 'ArrowUp') {
        console.log('Key:ArrowUp')
      } else if (e.key === 'ArrowLeft') {
        console.log('Key:ArrowLeft')
      } else if (e.key === 'ArrowRight') {
        console.log('Key:ArrowRight')
      }

      clearTimeout(hndlr)
      hndlr = null
    }, 300)
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('keydown', keyEventHandler)
    }
  }, [])

  const disabled = state === GameState.IDLE ? true : false

  return (
    <Main>
      <section>
        <Button onClick={rotateLeft} disabled={disabled}>
          <span className="material-icons">rotate_left</span>
        </Button>
        <Button onClick={moveForward} disabled={disabled}>
          <span className="material-icons">arrow_upward</span>
        </Button>
        <Button onClick={rotateRight} disabled={disabled}>
          <span className="material-icons">rotate_right</span>
        </Button>
      </section>
    </Main>
  )
}

export default Controls
