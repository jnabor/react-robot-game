import React from 'react'
import styled from 'styled-components'

import { GameState } from '../types'
import { IconButton, MenuButton } from './common'
import RobotIcon from '../assets/robot.png'

export const AppLayout = styled.div`
  padding: 10px;
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 32px 153px 1fr 174px;
  padding: 15px;
  justify-content: space-between;
  min-width: 610px;
  margin-bottom: 20px;
`
export const Logo = styled.img`
  font-size: 1em;
  max-height: 28px;
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`

export const Container = styled.div`
  margin: 0;
  padding: 0 5px;
  min-width: 620px;
`

export const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  color: #26666b;
  min-width: 610px;
`

export interface LayoutProps {
  state: GameState
  player: string
  editName: () => void
  setPage: (value: string) => void
  page: string
  children: any
}

const Layout: React.SFC<LayoutProps> = ({
  state,
  player,
  editName,
  setPage,
  page,
  children,
}) => {
  const name = player || 'anonymous'

  const handleNavigate = (path: string) => {
    if (page === path) return
    setPage(path)
  }

  return (
    <AppLayout>
      <Header>
        <div>
          <Logo src={RobotIcon} />
        </div>
        <div
          onClick={() => handleNavigate('game')}
          style={{ justifySelf: 'start' }}
        >
          <MenuButton active={page === 'game'}>ROBOT GAME</MenuButton>
        </div>
        <div
          style={{ textAlign: 'center', fontSize: '16px', paddingTop: '5px' }}
        >
          PLAYER: {name.toLocaleUpperCase()}
          <IconButton onClick={editName} disabled={state !== GameState.IDLE}>
            <span className="material-icons" style={{ fontSize: '16px' }}>
              create
            </span>
          </IconButton>
        </div>
        <div
          onClick={() => handleNavigate('leaderboard')}
          style={{ justifySelf: 'end' }}
        >
          <MenuButton
            active={page === 'leaderboard'}
            disabled={state !== GameState.IDLE}
          >
            LEADERBOARD
          </MenuButton>
        </div>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        <h4>Recruitment Challenge Robot Game </h4>
        <h6>2020 Made with React by Jayson Nabor™</h6>
      </Footer>
    </AppLayout>
  )
}

export default Layout
