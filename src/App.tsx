import React, { useState, useEffect, useCallback } from 'react'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import TableTop from './components/TableTop'
import Target from './components/Target'
import Robot from './components/Robot'
import Controls from './components/Controls'
import ModalOver from './components/ModalOver'
import ModalStart from './components/ModalStart'
import Page from './components/Page'
import Leaderboard from './components/Leaderboard'
import { Screen } from './components/common'

import { apiRequest, localItemPlayerName } from './services/mock'
import { GameState, Direction } from './types'
import { getRandLocation, getMiddle, isAtEdge } from './util'

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  const [score, setScore] = useState<number>(0)
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE)
  const [destroyed, setDestroyed] = useState<boolean>(false)
  const [targetLoc, setTargetLoc] = useState<[number, number]>([0, 0])
  const [robotLoc, setRobotLoc] = useState<[number, number]>(getMiddle())
  const [direction, setDirection] = useState<Direction>(Direction.UP)
  const [player, setPlayer] = useState<string>('')
  const [page, setPage] = useState('game')

  const editName = () => {
    setGameState(GameState.EDIT)
  }

  const setPlayerWrapped = (value: string) => {
    setPlayer(value)
    localStorage.setItem(localItemPlayerName, value)
  }

  const newGameSetup = () => {
    if (player !== '') {
      newGameHandler()
      return
    }
    setGameState(GameState.SETUP)
  }

  const endGame = () => {
    if (gameState !== GameState.STARTED) return
    handleGameOver()
  }

  const newGameHandler = () => {
    setGameIdle()
    setGameState(GameState.STARTED)
  }

  const setGameIdle = () => {
    setScore(0)
    setDestroyed(false)
    setTargetLoc(getRandLocation([robotLoc[0], robotLoc[1]]))
    setRobotLoc(getMiddle)
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

    if (isAtEdge([location[0], location[1]])) {
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
    // write to DB if not anonymous
    if (player !== '') {
      putDb()
    }
  }

  const putDb = async () => {
    try {
      const body = {
        name: player,
        score: score,
      }
      const res = await apiRequest('PUT', 'api/v2/games', body)
      if (res !== 'success') console.log('error!')
    } catch (e) {
      console.log('error!', e)
    }
  }

  useEffect(() => {
    // check if the target has been reached
    if (targetLoc[0] === robotLoc[0] && targetLoc[1] === robotLoc[1]) {
      setScore(prev => prev + 1)
      // spawn new target at random location except robot location
      setTargetLoc(getRandLocation([robotLoc[0], robotLoc[1]]))
      return
    }
  }, [robotLoc])

  useEffect(() => {
    if (page === 'game') setGameIdle()
  }, [page])

  useEffect(() => {
    const playerName = localStorage.getItem(localItemPlayerName)
    if (playerName !== null) setPlayer(playerName)
  }, [])

  return (
    <>
      <Layout
        state={gameState}
        player={player}
        editName={editName}
        setPage={(value: string) => setPage(value)}
        page={page}
      >
        <Page name="game" page={page}>
          <Dashboard
            score={score}
            timeout={timeoutHandler}
            newGame={newGameSetup}
            endGame={endGame}
            state={gameState}
          />
          <Screen>
            <TableTop />
            {gameState > GameState.SETUP ? (
              <>
                <Target location={[targetLoc[0], targetLoc[1]]} />
                <Robot
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
        </Page>
        <Page name="leaderboard" page={page}>
          <Leaderboard player={player} />
        </Page>
      </Layout>
      <ModalOver
        state={gameState}
        score={score}
        newGame={player === '' ? newGameSetup : newGameHandler}
        setIdle={setGameIdle}
      />
      <ModalStart
        player={player}
        setPlayer={setPlayerWrapped}
        state={gameState}
        newGame={newGameHandler}
        setIdle={setGameIdle}
      />
    </>
  )
}

export default App
