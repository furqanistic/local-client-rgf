import React, { useState } from 'react'
import styled from 'styled-components'

import {
  Search,
  ViewTimelineOutlined,
  Add,
  Update,
  Settings,
} from '@mui/icons-material/'
const Bar = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #a18c3a81;
`

const Name = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #ffffff81;
  letter-spacing: 0.3rem;
  background-color: #a18d3a;
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ItemsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
  max-width: 250px;
  height: 100vh;
  background-color: #a18d3a;
`
const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem 1rem;
  color: #000000;
  width: 100%;
  border-radius: 20px;
  transition: all 0.1s ease;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: #a18d3a;
  }
`
const ActiveItem = styled(Item)`
  background-color: #000000;
  color: #a18d3a;
`
const ItemName = styled.p`
  font-size: 1rem;
  font-weight: 600;
`
const ItemIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard')
  return (
    <>
      <Bar>
        <Name>RGC</Name>
        <ItemsWrapper>
          {selectedItem === 'Dashboard' ? (
            <ActiveItem onClick={() => setSelectedItem('Dashboard')}>
              <ItemIcon>
                <ViewTimelineOutlined />
              </ItemIcon>
              <ItemName>Dashboard</ItemName>
            </ActiveItem>
          ) : (
            <Item onClick={() => setSelectedItem('Dashboard')}>
              <ItemIcon>
                <ViewTimelineOutlined />
              </ItemIcon>
              <ItemName>Dashboard</ItemName>
            </Item>
          )}
          {selectedItem === 'Booking' ? (
            <ActiveItem onClick={() => setSelectedItem('Booking')}>
              <ItemIcon>
                <Add />
              </ItemIcon>
              <ItemName>Booking</ItemName>
            </ActiveItem>
          ) : (
            <Item onClick={() => setSelectedItem('Booking')}>
              <ItemIcon>
                <Add />
              </ItemIcon>
              <ItemName>Booking</ItemName>
            </Item>
          )}
          {selectedItem === 'Update' ? (
            <ActiveItem onClick={() => setSelectedItem('Update')}>
              <ItemIcon>
                <Update />
              </ItemIcon>
              <ItemName>Update</ItemName>
            </ActiveItem>
          ) : (
            <Item onClick={() => setSelectedItem('Update')}>
              <ItemIcon>
                <Update />
              </ItemIcon>
              <ItemName>Update</ItemName>
            </Item>
          )}
          {selectedItem === 'Find' ? (
            <ActiveItem onClick={() => setSelectedItem('Find')}>
              <ItemIcon>
                <Search />
              </ItemIcon>
              <ItemName>Find</ItemName>
            </ActiveItem>
          ) : (
            <Item onClick={() => setSelectedItem('Find')}>
              <ItemIcon>
                <Search />
              </ItemIcon>
              <ItemName>Find</ItemName>
            </Item>
          )}
          {selectedItem === 'Settings' ? (
            <ActiveItem onClick={() => setSelectedItem('Settings')}>
              <ItemIcon>
                <Settings />
              </ItemIcon>
              <ItemName>Settings</ItemName>
            </ActiveItem>
          ) : (
            <Item onClick={() => setSelectedItem('Settings')}>
              <ItemIcon>
                <Settings />
              </ItemIcon>
              <ItemName>Settings</ItemName>
            </Item>
          )}
        </ItemsWrapper>
      </Bar>
    </>
  )
}

export default Sidebar
