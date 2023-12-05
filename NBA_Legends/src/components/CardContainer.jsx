import React from 'react'
import PlayerCard from './PlayerCard'
import {data} from '../helper/data.js'
import CardStyle from "./style/CardContainer.module.css"

const CardContainer = () => {

  return (
    <div className={CardStyle.cardContainer}>
        {data.map((card, index) => (<PlayerCard key={index} {...card}/>))}
    </div>
  )
}

export default CardContainer