import React, { useState, useEffect, useCallback } from 'react'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import TableTop from './components/TableTop'
import Target from './components/Target'
import Robot from './components/Robot'
import Controls from './components/Controls'
import ModalOver from './components/ModalOver'
import { Screen } from './components/common'

import { GameState, Direction } from './types'
import { getRandLocation, getMiddle, isAtEdge } from './util'

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  const [score, setScore] = useState<number>(0)
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE)
  const [destroyed, setDestroyed] = useState<boolean>(false)
  const [targetLoc, setTargetLoc] = useState<[number, number]>([0, 0])
  const [robotLoc, setRobotLoc] = useState<[number, number]>([0, 0])
  const [direction, setDirection] = useState<Direction>(Direction.UP)
  const [size, setSize] = useState<number>(8)

  const newGameSetup = useCallback(() => {
    setGameIdle()
    setGameState(GameState.STARTED)
  }, [size, gameState])

  const endGame = useCallback(() => {
    if (gameState !== GameState.STARTED) return
    handleGameOver()
  }, [gameState])

  const setGameIdle = () => {
    setRobotLoc(getMiddle(size))
    setScore(0)
    setDestroyed(false)
    setTargetLoc(getRandLocation(size, [robotLoc[0], robotLoc[1]]))
    setGameState(GameState.IDLE)
    setDirection(Direction.UP)
  }

  const rotateLeft = () => {
    if (gameState !== GameState.STARTED) return
    setDirection(direction > 0 ? direction - 90 : 270)
  }

  const rotateRight = () => {
    if (gameState !== GameState.STARTED) return
    setDirection(direction < 270 ? direction + 90 : 0)
  }

  const moveForward = () => {
    if (gameState !== GameState.STARTED) return
    let location = [...robotLoc]
    switch (direction) {
      case Direction.UP:
        location[0] -= 1
        break
      case Direction.RIGHT:
        location[1] += 1
        break
      case Direction.DOWN:
        location[0] += 1
        break
      case Direction.LEFT:
        location[1] -= 1
        break
    }

    if (isAtEdge(size, [location[0], location[1]])) {
      setDestroyed(true)
      handleGameOver()
      return
    }

    setRobotLoc([location[0], location[1]])
  }

  const timeoutHandler = () => {
    handleGameOver()
  }

  const handleGameOver = () => {
    setGameState(GameState.OVER)
  }

  const keyHandler = (e: KeyboardEvent) => {
    console.log(gameState)
    switch (e.key) {
      case 'ArrowUp':
        moveForward()
        break
      case 'ArrowLeft':
        rotateLeft()
        break
      case 'ArrowRight':
        rotateRight()
        break
    }
  }

  useEffect(() => {
    // check if the target has been reached
    if (targetLoc[0] === robotLoc[0] && targetLoc[1] === robotLoc[1]) {
      setScore((prev) => prev + 1)
      // spawn new target at random location except robot location
      setTargetLoc(getRandLocation(size, [robotLoc[0], robotLoc[1]]))
      return
    }
  }, [size, robotLoc])

  useEffect(() => {
    document.addEventListener('keydown', keyHandler, false)
    return () => {
      document.removeEventListener('keydown', keyHandler, false)
    }
  }, [gameState, direction, robotLoc, targetLoc])

  useEffect(() => {
    setGameIdle()
  }, [])

  return (
    <>
      <Layout
        size={size}
        setSize={(size: number) => setSize(size)}
        changeEnable={gameState === GameState.IDLE}
      >
        <Dashboard
          score={score}
          timeout={timeoutHandler}
          newGame={newGameSetup}
          endGame={endGame}
          state={gameState}
        />
        <Screen>
          <TableTop size={size} />
          {gameState > GameState.SETUP ? (
            <>
              <Target size={size} location={[targetLoc[0], targetLoc[1]]} />
              <Robot
                size={size}
                location={[robotLoc[0], robotLoc[1]]}
                direction={direction}
                destroyed={destroyed}
              />
            </>
          ) : null}
        </Screen>
        <Controls
          state={gameState}
          rotateLeft={rotateLeft}
          rotateRight={rotateRight}
          moveForward={moveForward}
        />
      </Layout>
      <ModalOver
        state={gameState}
        score={score}
        newGame={newGameSetup}
        setIdle={setGameIdle}
      />
    </>
  )
}

export default App
