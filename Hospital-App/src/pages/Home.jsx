import React from 'react'
import Doctors from '../components/Doctors'
import AppointmentList from '../components/AppointmentList'

const Home = () => {
  return (
    <div>
        <Doctors/>
        <AppointmentList/>
    </div>
  )
}

export default Home