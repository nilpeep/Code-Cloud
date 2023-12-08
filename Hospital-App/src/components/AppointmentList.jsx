import React from 'react'
import { appointmentData } from '../helpers/data'
import Appoint from './Appoint'

const AppointmentList = () => {
  return (
    <div className='container'>
        <h2>Appointment List</h2>
        {appointmentData.map((appoint) => 
            (
            <div key={appoint.id}>
                <Appoint {...appoint}/>
            </div>)
        )}

    </div>
  )
}

export default AppointmentList