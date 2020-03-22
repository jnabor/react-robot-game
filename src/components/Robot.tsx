import React from 'react'
import styled, { css } from 'styled-components'
import RoverIcon from '../assets/robot.svg'
import DestroyedIcon from '../assets/destroyed.svg'
import { GAME_GRIDS } from '../config'
interface RobotIconProps {
  rotation?: number
}

export const RobotIcon = styled.img<RobotIconProps>`
  max-width: 100%;
  max-height: 100%;
  ${props =>
    props.rotation &&
    css`
      transform: rotate(${props.rotation}deg);
    `};
`

export interface RobotProps {
  location: [number, number]
  direction: number
  destroyed?: boolean
}

const Robot: React.SFC<RobotProps> = ({ location, direction, destroyed }) => {
  const scale = 100 / GAME_GRIDS

  const Icon = destroyed ? DestroyedIcon : RoverIcon
  const rotation = destroyed ? 0 : direction

  const shadow1 = rotation === 0 || rotation === 90 ? '3px' : '-3px'
  const shadow2 = rotation === 0 || rotation === 270 ? '3px' : '-3px'

  return (
    <div
      style={{
        height: `${scale}%`,
        width: `${scale}%`,
        top: `${location[0] * scale}%`,
        left: `${location[1] * scale}%`,
        position: 'absolute',
      }}
    >
      <RobotIcon
        src={Icon}
        rotation={rotation}
        style={{ filter: `drop-shadow(${shadow1} ${shadow2} 4px #222)` }}
      ></RobotIcon>
    </div>
  )
}

export default Robot
