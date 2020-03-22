import { GAME_GRIDS } from './config'

// get random location except for the robot location
export const getRandLocation = (exempt: [number, number]): [number, number] => {
  const grids = Math.pow(GAME_GRIDS, 2)
  const exemptN = GAME_GRIDS * exempt[0] + exempt[1]
  let rand = Math.floor(Math.random() * grids)
  if (rand === exemptN) {
    rand = rand > 0 ? rand - 1 : rand + 1
  }
  return [
    Math.floor(rand / GAME_GRIDS),
    rand - Math.floor(rand / GAME_GRIDS) * GAME_GRIDS,
  ]
}

export const getMiddle = (): [number, number] => {
  return [Math.floor(GAME_GRIDS / 2), Math.floor(GAME_GRIDS / 2)]
}

export const isAtEdge = (location: [number, number]): boolean => {
  if (
    location[0] >= GAME_GRIDS ||
    location[0] < 0 ||
    location[1] >= GAME_GRIDS ||
    location[1] < 0
  ) {
    return true
  }
  return false
}
