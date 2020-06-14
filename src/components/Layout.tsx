import React from 'react'
import styled from 'styled-components'

import { GameState } from '../types'
import { MenuButton, SizeSelect } from './common'
import RobotIcon from '../assets/robot.png'

export const AppLayout = styled.div`
  padding: 10px;
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 32px 168px 1fr 200px;
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
  size: number
  setSize: (size: number) => void
  changeEnable: boolean
  children: any
}

const Layout: React.SFC<LayoutProps> = ({
  size,
  setSize,
  changeEnable,
  children,
}) => {


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
          style={{ textAlign: 'center', fontSize: '16px', paddingTop: '9px', color: '#a2a7aa' }}
        >
          <span>SIZE</span>
          <SizeSelect disabled={!changeEnable} onChange={(e: React.FormEvent<HTMLSelectElement>) => setSize(parseInt(e.currentTarget.value, 10))} name="size" value={size}>
            <option value="5" >5 x 5</option>
            <option value="6" >6 x 6</option>
            <option value="7" >7 x 7</option>
            <option value="8" >8 x 8</option>
            <option value="9" >9 x 9</option>
            <option value="10" >10 x 10</option>
        </SizeSelect>
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
        <p style={{ fontSize: '12px', marginBottom: '20px'}} > Use buttons or press ← ↑ → keys in keyboard</p>
        <p>Made with React by Jay<span style={{ color: '#267ab3'}}>son</span> N<span style={{ color: '#267ab3'}}>ab</span>or™</p>
      </Footer>
    </AppLayout>
  )
}

export default Layout
