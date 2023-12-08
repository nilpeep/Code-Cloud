import React, { useState } from 'react'

const Appoint = ({patient, day, consulted, doctor}) => {

    const [isConsulted, setIsConsulted] = useState(consulted);

    const handleIsConsulted = () => {
        setIsConsulted(!isConsulted);
    }

  return (
    <div onDoubleClick={handleIsConsulted} className='d-flex justify-content-between align-items-center border border-1 border-danger mb-2 p-3'>
        <div>
            <h3>{patient}</h3>
            <p>{doctor}</p>
        </div>
        <div>
            <p>DATE : {day.getMonth()}</p>
            {isConsulted && <button type="button" className="position-relative bottom-3">CONSULTED</button>}
        </div>
        <button type="button">❌</button>
    </div>
  )
}

export default Appoint