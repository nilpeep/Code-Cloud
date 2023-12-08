import React, { useState } from 'react'
import { appointmentData } from '../helpers/data'
import Appoint from './Appoint'

const AppointmentList = () => {

    const [appointments, setAppointments] = useState(appointmentData);

    // const handleAdd = () => {
    //     let newData = {
    //         id: appointments.length + 1,
    //         patient: "Barry Vermont",
    //         day: new Date(),
    //         consulted: true,
    //         doctor: "Dr. Hazel Valery",
    //       }
    //     setAppointments([...appointments, newData])
    // }

  return (
    <div className='container'>
        {/* <h2 onClick={handleAdd}>Appointment List</h2> */}
        <h2>Appointment List</h2>
        {appointments.map((appoint) => 
            (
            <div key={appoint.id}>
                <Appoint {...appoint}/>
            </div>)
        )}

    </div>
  )
}

export default AppointmentList