import React, { useEffect, useState } from 'react'
import { apiRequest } from '../services/mock'
import { GameContainer, GameHeader, GameItem } from './common'

export interface LeaderBoardProps {
  player: string
}

const LeaderBoard: React.SFC<LeaderBoardProps> = ({ player }) => {
  const [db, setDb] = useState<any>(null)

  const fetch = async () => {
    try {
      const db = await apiRequest('GET', 'api/v2/games', {})
      setDb(db)
    } catch (e) {
      console.log('error!', e)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '24px' }}>LEADER BOARD</div>
      <h6 style={{ color: '#26666b' }}>Games with highest scores</h6>
      <GameHeader>
        <GameItem>Rank</GameItem>
        <GameItem></GameItem>
        <GameItem>Name</GameItem>
        <GameItem>Date and Time</GameItem>
        <GameItem>Score</GameItem>
      </GameHeader>
      {db === null
        ? null
        : db.map((data: any, index: number) => (
            <GameContainer
              key={index}
              active={data.name.toLowerCase() === player.toLowerCase()}
            >
              <GameItem style={{ textAlign: 'center' }}>{index + 1}</GameItem>
              <GameItem></GameItem>
              <GameItem style={{ textTransform: 'capitalize' }}>
                {data.name}
              </GameItem>
              <GameItem>{data.dateTime}</GameItem>
              <GameItem style={{ textAlign: 'center' }}>{data.score}</GameItem>
            </GameContainer>
          ))}
    </div>
  )
}

export default LeaderBoard
