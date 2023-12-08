import React, { useState } from 'react'
import AddModal from './AddModal'

const Doctor = ({name, img, dep}) => {

  const [clicked, setClicked] = useState(false);

  const handleModal = () =>{
    setClicked(true);
  }

  return (
    <div>
        {clicked && <AddModal {...name}/>}
        <img onClick={handleModal} src={img} width="120px" alt="" />
        <p>{name}</p>
        <p>{dep}</p>
    </div>
  )
}

export default Doctor