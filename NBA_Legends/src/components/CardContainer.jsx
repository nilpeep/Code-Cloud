import React from 'react'
import PlayerCard from './PlayerCard'
import {data} from '../helper/data.js'
import CardStyle from "./style/CardContainer.module.css"

const CardContainer = ({filteredValue}) => {
    const filteredData = data.filter((item) => item.name.toLowerCase().includes(filteredValue.toLowerCase()))
  return (
    <div className={CardStyle.cardContainer}>
        {filteredData.map((card, index) => (<PlayerCard key={index} {...card}/>))}
    </div>
  )
}

export default CardContainer