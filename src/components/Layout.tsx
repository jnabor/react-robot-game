import React from 'react'
import styled from 'styled-components'

import { GameState } from '../types'
import { MenuButton } from './common'
import RobotIcon from '../assets/robot.png'

export const AppLayout = styled.div`
  padding: 10px;
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 32px 200px 1fr 1fr;
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
  color: #a2a7aa;
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

  return (
    <AppLayout>
      <Header>
        <div>
          <Logo src={RobotIcon} />
        </div>
        <div
          style={{ justifySelf: 'start' }}
        >
          <MenuButton>ROBOT GAME</MenuButton>
        </div>
        <div
          style={{ textAlign: 'center', fontSize: '16px', paddingTop: '5px' }}
        >
        </div>
        <div
          style={{ justifySelf: 'end' }}
        >
        </div>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        <span>Made with React by Jay<span style={{ color: '#267ab3'}}>son</span> N<span style={{ color: '#267ab3'}}>ab</span>or™</span>
      </Footer>
    </AppLayout>
  )
}

export default Layout
