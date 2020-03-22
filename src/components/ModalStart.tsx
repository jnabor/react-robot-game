import React, { useEffect, useState } from 'react'

import { GameState } from '../types'
import { ModalContainer, ModalContent, NameInput, ModalButton } from './common'

export interface ModalProps {
  state: GameState
  player: string
  setPlayer: (value: string) => void
  newGame: () => void
  setIdle: () => void
}

const Modal: React.SFC<ModalProps> = ({
  state,
  player,
  setPlayer,
  newGame,
  setIdle,
}) => {
  const [modal, setModal] = useState(false)
  const [value, setValue] = useState<string>(player)

  const handleNewGame = () => {
    setPlayer(value.trim())
    setModal(false)
    newGame()
  }

  const handleSave = () => {
    setPlayer(value.trim())
    setModal(false)
    setIdle()
  }

  const handleClose = () => {
    setModal(false)
    setIdle()
  }

  const buttonLabel = state === GameState.EDIT ? 'SAVE' : 'START'
  useEffect(() => {
    if (state !== GameState.SETUP && state !== GameState.EDIT) return
    setModal(true)
  }, [state])

  return (
    <ModalContainer id="myModal" style={{ display: modal ? 'block' : 'none' }}>
      <ModalContent>
        <div>
          <p>
            ENTER NAME <span style={{ fontSize: '10px' }}> ( OPTIONAL )</span>
          </p>
          <NameInput
            type="text"
            onChange={e => setValue(e.currentTarget.value)}
            value={value}
          ></NameInput>
        </div>
        <ModalButton
          onClick={() =>
            state === GameState.EDIT ? handleSave() : handleNewGame()
          }
        >
          {buttonLabel}
        </ModalButton>
        <ModalButton
          onClick={() => handleClose()}
          style={{ marginLeft: '15px' }}
          disabled={state === GameState.STARTED}
        >
          EXIT
        </ModalButton>
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
