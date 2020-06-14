
// get random location except for the robot location
export const getRandLocation = (size: number, exempt: [number, number]): [number, number] => {
  const grids = Math.pow(size, 2)
  const exemptN = size * exempt[0] + exempt[1]
  let rand = Math.floor(Math.random() * grids)
  if (rand === exemptN) {
    rand = rand > 0 ? rand - 1 : rand + 1
  }
  return [
    Math.floor(rand / size),
    rand - Math.floor(rand / size) * size,
  ]
}

export const getMiddle = (size: number): [number, number] => {
  return [Math.floor(size / 2), Math.floor(size / 2)]
}

export const isAtEdge = (size: number, location: [number, number]): boolean => {
  if (
    location[0] >= size ||
    location[0] < 0 ||
    location[1] >= size ||
    location[1] < 0
  ) {
    return true
  }
  return false
}
