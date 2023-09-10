import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import {
  Search,
  ViewTimelineOutlined,
  Add,
  Update,
  Settings,
} from '@mui/icons-material/'
import { Link, useLocation } from 'react-router-dom'
const Bar = styled.div`
  background-color: #00000081;
  height: 100%;
`

const Name = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #ffffffae;
  letter-spacing: 0.3rem;
  background-color: #000000;
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
  color: white;
  background-color: #000000;
`
const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem 1rem;
  color: #ffffff;
  width: 100%;
  border-radius: 20px;
  transition: all 0.1s ease;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: #f6d75c;
  }
`
const ActiveItem = styled(Item)`
  background-color: #000000;
  color: #f6d75c;
`
const ItemName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
`
const ItemIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  width: 100%;
`

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState()
  const location = useLocation()

  const items = [
    {
      name: 'Dashboard',
      icon: <ViewTimelineOutlined />,
      key: 'Dashboard',
      path: '/dashboard',
    },
    { name: 'Booking', icon: <Add />, key: 'Booking', path: '/booking' },
    { name: 'Update', icon: <Update />, key: 'Update', path: '/update' },
    { name: 'Find', icon: <Search />, key: 'Find', path: '/find' },
    {
      name: 'Settings',
      icon: <Settings />,
      key: 'Settings',
      path: '/setting',
    },
  ]

  useEffect(() => {
    const currentKey = items.find(
      (item) => item.path === location.pathname
    )?.key
    if (currentKey) {
      setSelectedItem(currentKey)
    }
  }, [location.pathname, items])

  return (
    <>
      <Bar>
        <Name>RGC</Name>
        <ItemsWrapper>
          {items.map((item) => (
            <Link
              to={item.path}
              key={item.key}
              style={{ textDecoration: 'none' }}
            >
              <Item
                onClick={() => setSelectedItem(item.key)}
                style={{
                  backgroundColor:
                    selectedItem === item.key ? '#ffffff' : 'transparent',
                  color: selectedItem === item.key ? '#000000' : '#ffffff',
                }}
              >
                <ItemIcon>{item.icon}</ItemIcon>
                <ItemName>{item.name}</ItemName>
              </Item>
            </Link>
          ))}
        </ItemsWrapper>
      </Bar>
    </>
  )
}

export default Sidebar
