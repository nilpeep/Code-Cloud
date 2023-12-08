import React from 'react'

const Doctor = ({name, img, dep}) => {
  return (
    <div>
        <img src={img} width="120px" alt="" />
        <p>{name}</p>
        <p>{dep}</p>
    </div>
  )
}

export default Doctor