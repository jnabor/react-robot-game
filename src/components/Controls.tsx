import React, {useEffect } from 'react'
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
