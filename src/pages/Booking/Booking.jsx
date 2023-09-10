import React from 'react'
import Layout from '../../Layout'
import NotificationCard from '../../components/Booking/NotificationCard'
import styled from 'styled-components'

const Mid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Booking = () => {
  return (
    <Layout>
      <Mid>
        <NotificationCard />
      </Mid>
    </Layout>
  )
}

export default Booking
