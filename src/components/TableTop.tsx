import React from 'react'
import styled from 'styled-components'

export const Tile = styled.div`
  border: 2px solid #232729;
  padding: 0;
  text-align: center;
  position: absolute;
  background-color: transparent;
`

export interface TableTopProps {
  size: number
}

const TableTop: React.SFC<TableTopProps> = ({size}) => {
  const scale = 100 / size

  const tiles: any[] = []
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
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
