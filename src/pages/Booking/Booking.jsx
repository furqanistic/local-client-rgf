import React, { useEffect } from 'react'
import Layout from '../../Layout'
import NotificationCard from '../../components/Booking/NotificationCard'
import styled from 'styled-components'

const Mid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const Booking = () => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [])
  return (
    <Layout>
      <Mid>
        <NotificationCard />
      </Mid>
    </Layout>
  )
}

export default Booking
