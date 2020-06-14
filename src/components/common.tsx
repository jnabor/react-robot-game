import styled, { css } from 'styled-components'
import { GAME_DIMENSION } from '../config'

export const SizeSelect = styled.select`
  margin-left: 10px;
  color: #a2a7aa;
  background-color: #222729;
  font-size: 16px;
  height: 20px;
  border: none;
`

export const baseButton = styled.button`
  background-color: #556163;
  outline: none;
  border: none;
  color: white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 3px 3px 0 #222;
  :hover {
    background-color: #36837f;
  }
  :active {
    transform: translateY(1px);
    background-color: #36837f;
  }
  :disabled {
    background-color: #333b3c;
    box-shadow: none;
    color: #575840;
  }
`

export const Button = styled(baseButton)`
  margin: 10px;
  padding: 20px 25px 15px 25px;
  font-size: 16px;
`

export const GameButton = styled(baseButton)`
  margin: 5px;
  padding: 2px;
  font-size: 24px;
`
export const MenuButton = styled.button`
  margin: 5px;
  padding: 4px 8px 4px 8px;
  font-size: 18px;
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  color: #a2a7aa;
  text-align: center;
`

interface CardProps {
  color?: string
}
export const Card = styled.div<CardProps>`
  border: none;
  border-radius: 4px;
  background-color: #333b3c;
  margin: 5px;
  padding: 2px;
  font-size: 24px;
  text-align: center;
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};
`

export const Screen = styled.div`
  position: relative;
  height: ${GAME_DIMENSION + 50}px;
  width: ${GAME_DIMENSION + 20}px;
  background-color: #333b3c;
  margin: 10px 0px;
`

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.7);
`
export const ModalContent = styled.div`
  background-color: transparent;
  color: #b5b894;
  text-align: center;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
`
export const NameInput = styled.input`
  margin-top: 10px;
  background-color: transparent;
  outline: none;
  border: 2px solid #26666b;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  padding: 5px;
`

export const ModalButton = styled(GameButton)`
  margin: 30px auto;
  padding: 10px 20px 10px 20px;
`

export const IconButton = styled.button`
  background-color: transparent;
  color: #26666b;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  :hover {
    color: #31948f;
  }
  :active {
    transform: translateY(1px);
    color: #26666b;
  }
  :disabled {
    transform: translateY(1px);
    color: #1c4547;
  }
`

export const GameContainerBase = styled.div`
  display: grid;
  grid-template-columns: 52px 80px 1fr 1fr 57px;
  padding: 8px 20px;
  font-size: 18px;
  border-radius: 4px;
`

export const GameHeader = styled(GameContainerBase)`
  margin: 4px 0 4px 0;
  background-color: #3a4f52;
`

interface GameContainerProps {
  active?: boolean
}
export const GameContainer = styled(GameContainerBase)<GameContainerProps>`
  margin: 4px 0 4px 0;
  background-color: #333b3c;
  ${props =>
    props.active &&
    css`
      background-color: #84462a;
    `};
  :hover {
    background-color: #3a4f52;
  }
`

export const GameItem = styled.div`
  text-align: left;
`
