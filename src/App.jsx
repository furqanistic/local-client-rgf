import React from 'react'
import Home from './pages/Home'
import Find from './pages/Find'
import Setting from './pages/Setting'
import Update from './pages/Update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Booking from './pages/Booking/Booking'
import NewBooking from './pages/Booking/NewBooking'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Login />} />
            <Route path='dashboard' element={<Home />} />
            <Route path='booking'>
              <Route index element={<Booking />} />
              <Route path='new' element={<NewBooking />} />
            </Route>
            <Route path='find' element={<Find />} />
            <Route path='setting' element={<Setting />} />
            <Route path='update' element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
