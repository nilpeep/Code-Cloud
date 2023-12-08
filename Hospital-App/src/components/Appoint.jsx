import React, { useState } from 'react'

const Appoint = ({patient, day, consulted, doctor}) => {

    const [isConsulted, setIsConsulted] = useState(consulted);
    const [deleted, setDeleted] = useState(true);

    const handleIsConsulted = () => {
        setIsConsulted(!isConsulted);
    }

    const handleDelete = () => {
        setDeleted(!deleted);
    }

  return (
    deleted && (
    <div onDoubleClick={handleIsConsulted} className='d-flex justify-content-between align-items-center border border-1 border-danger mb-2 p-3'>
        <div>
            <h3>{patient}</h3>
            <p>{doctor}</p>
        </div>
        <div>
            <p>Appoint : {day.toLocaleDateString()} / {day.toLocaleTimeString().toString().slice(0,-3)}</p>
            {isConsulted && <button type="button" className="position-relative bottom-3">CONSULTED</button>}
        </div>
        <button type="button" onClick={handleDelete}>❌</button>
    </div>
  )
  )
}

export default Appoint