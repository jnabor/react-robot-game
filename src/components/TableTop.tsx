import React from 'react'
import styled from 'styled-components'
import { GAME_GRIDS } from '../config'

export const Tile = styled.div`
  border: 1px solid #26666b;
  padding: 0;
  text-align: center;
  position: absolute;
  background-color: transparent;
`

export interface TableTopProps {}

const TableTop: React.SFC<TableTopProps> = () => {
  const scale = 100 / GAME_GRIDS

  const tiles: any[] = []
  for (let r = 0; r < GAME_GRIDS; r++) {
    for (let c = 0; c < GAME_GRIDS; c++) {
      tiles.push([`${r * scale}%`, `${c * scale}%`])
    }
  }

  return (
    <div>
      {tiles.map((tile, index) => {
        return (
          <Tile
            key={index}
            style={{
              height: `${scale}%`,
              width: `${scale}%`,
              top: tile[0],
              left: tile[1],
            }}
          />
        )
      })}
    </div>
  )
}

export default TableTop
