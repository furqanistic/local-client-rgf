import { AddBox } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  max-width: 520px;
  border-width: 1px;
  border-color: rgba(219, 234, 254, 1);
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 1);
  padding: 1rem;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Icon = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #232222;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 1);

  svg {
    height: 1.7rem;
    width: 1.7rem;
  }
`

const Alert = styled.p`
  font-weight: 600;
  color: rgba(107, 114, 128, 1);
  font-size: 1.2rem;
`

const Message = styled.p`
  margin-top: 1rem;
  color: rgba(107, 114, 128, 1);
`

const Actions = styled.div`
  margin-top: 1.5rem;
`

const ActionLink = styled.a`
  text-decoration: none;
  display: inline-block;
  border-radius: 0.5rem;
  width: 100%;
  padding: 1rem 1.5rem;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  &.new {
    background-color: #000000;
    color: rgba(255, 255, 255, 1);
  }

  &.update-booking {
    margin-top: 0.5rem;
    background-color: #175b01;
    color: #ffffff;
  }
  &.delete-booking {
    margin-top: 0.5rem;
    background-color: #8f0505;
    color: #ffffff;
  }
`
const Linker = styled(Link)`
  text-decoration: none;
`

const NotificationCard = () => (
  <Card>
    <Header>
      <Icon>
        <AddBox />
      </Icon>
      <Alert>Booking Form</Alert>
    </Header>
    <Actions>
      <Linker to='new'>
        <ActionLink className='new'>New Booking</ActionLink>
      </Linker>
      <ActionLink className='update-booking'>Update Booking</ActionLink>
      <ActionLink className='delete-booking'>Delete Booking</ActionLink>
    </Actions>
  </Card>
)

export default NotificationCard
