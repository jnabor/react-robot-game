import React from 'react'
import styled from 'styled-components'
import StarIcon from '../assets/star.svg'

export const TargetIcon = styled.img`
  max-width: 80%;
  max-height: 80%;
  margin: 20px;
  filter: drop-shadow(3px 3px 5px #222);
`

export interface TargetProps {
  size: number
  location: [number, number]
}

const Target: React.SFC<TargetProps> = ({ size, location }) => {
  const scale = 100 / size

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
      <TargetIcon src={StarIcon} />
    </div>
  )
}

export default Target
