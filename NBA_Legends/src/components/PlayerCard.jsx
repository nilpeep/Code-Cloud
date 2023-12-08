import React, { useState } from 'react'
import CardStyle from "./style/CardContainer.module.css"

const PlayerCard = ({name, img, statistics}) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    }

  return (
    !flipped ? (
    <div className={CardStyle.card} onClick={handleFlip}>
        <img className={CardStyle.img} src={img} alt="" />
        <h3>{name}</h3>
    </div>) : (<div className={CardStyle.card} onClick={handleFlip}>
        {statistics.map((stat) => (<p>🏀 {stat}</p>))}
    </div>)
  )
}

export default PlayerCard