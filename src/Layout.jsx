import React from 'react'
import Sidebar from './components/Home/Sidebar'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  height: 100%;
`
const Left = styled.div`
  max-width: 250px;
  min-height: 100%;
  background-color: black;
`
const Right = styled.div`
  width: 100%;
  height: 100%;

  background-color: #00000081;
`
const Layout = ({ children }) => {
  return (
    <Wrap>
      <Left>
        <Sidebar />
      </Left>
      <Right>{children}</Right>
    </Wrap>
  )
}

export default Layout
