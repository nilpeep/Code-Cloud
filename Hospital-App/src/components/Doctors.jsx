import React from 'react'
import Doctor from './Doctor'
import { doctorData } from '../helpers/data'

const Doctors = () => {
  return (
    <div className='container '>
      <div>
          <h1>CLARUS HOSPITAL</h1>
          <h2>Our Doctors</h2>
      </div>
      <div className='row'>
        {doctorData.map((doctor) => (
                <div className='col-xl-1' key={doctor.id}>
                    <Doctor {...doctor}/>
                </div>
        ))}
      </div>
    </div>
  )
}

export default Doctors