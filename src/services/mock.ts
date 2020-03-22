export const localItemName =
  'JaNa/RecruitmentChallengeReactRobotGameMockDb/api/v2/games/'

export const localItemPlayerName =
  'JaNa/RecruitmentChallengeReactRobotGameMockDb/player/name'

const mockDb = {
  games: [
    { name: 'Jayson', score: 9, dateTime: '' },
    { name: 'Johann', score: 12, dateTime: '' },
    { name: 'Celestine', score: 25, dateTime: '' },
    { name: 'Celine', score: 29, dateTime: '' },
    { name: 'Karen', score: 14, dateTime: '' },
    { name: 'Wayne', score: 15, dateTime: '' },
    { name: 'Gabriel', score: 18, dateTime: '' },
    { name: 'Mark', score: 57, dateTime: '' },
    { name: 'Rafael', score: 17, dateTime: '' },
    { name: 'Gianna', score: 19, dateTime: '' },
    { name: 'Cierra', score: 14, dateTime: '' },
    { name: 'Pierre', score: 2, dateTime: '' },
    { name: 'Danna', score: 4, dateTime: '' },
    { name: 'Dylan', score: 78, dateTime: '' },
    { name: 'Jean', score: 17, dateTime: '' },
    { name: 'Fernando', score: 47, dateTime: '' },
    { name: 'Kierra', score: 52, dateTime: '' },
    { name: 'Cody', score: 11, dateTime: '' },
    { name: 'Sydney', score: 15, dateTime: '' },
    { name: 'Elena', score: 13, dateTime: '' },
    { name: 'Alvaro', score: 10, dateTime: '' },
    { name: 'Marina', score: 12, dateTime: '' },
  ],
}

let init = 0
const initMock = () => {
  // initialize mock at local storage
  if (localStorage.getItem(localItemName) === null) {
    localStorage.setItem(localItemName, JSON.stringify(mockDb))
  }
  init = 1
}

export const apiRequest = (request: string, url?: string, body?: any) => {
  if (!init) initMock()

  if (request === 'GET') {
    return new Promise((resolve, reject) => {
      const db = JSON.parse(String(localStorage.getItem(localItemName)))
      const games = db.games
      games.sort((a: any, b: any) => {
        return b.score - a.score
      })

      resolve(games.slice(0, 20))
    })
  }

  if (request === 'PUT') {
    return new Promise((resolve, reject) => {
      const db = JSON.parse(String(localStorage.getItem(localItemName)))
      let games = db.games
      games.push({ name: body.name, score: body.score, dateTime: '' })
      localStorage.setItem(localItemName, JSON.stringify({ games: games }))
      resolve('success')
    })
  }
}
