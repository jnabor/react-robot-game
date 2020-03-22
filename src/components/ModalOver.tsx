import React, { useEffect, useState } from 'react'

import { GameState } from '../types'
import { ModalButton, ModalContainer, ModalContent } from './common'

export interface ModalProps {
  state: GameState
  score: number
  newGame: () => void
  setIdle: () => void
}

const Modal: React.SFC<ModalProps> = ({ state, score, newGame, setIdle }) => {
  const [modal, setModal] = useState(false)

  const handleClose = () => {
    setModal(false)
    setIdle()
  }

  const handleNewGame = () => {
    setModal(false)
    newGame()
  }

  useEffect(() => {
    if (state !== GameState.OVER) return
    setTimeout(() => {
      setModal(true)
    }, 400)
  }, [state])

  return (
    <ModalContainer id="myModal" style={{ display: modal ? 'block' : 'none' }}>
      <ModalContent>
        <h3 style={{ color: '#ffffff' }}>
          SCORE: {score.toString().padStart(2, '0')}
        </h3>
        <h1>GAME OVER!!!</h1>

        <ModalButton onClick={() => handleNewGame()} disabled={false}>
          NEW GAME
        </ModalButton>
        <ModalButton
          style={{ marginLeft: '15px' }}
          onClick={() => handleClose()}
          disabled={false}
        >
          EXIT
        </ModalButton>
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
