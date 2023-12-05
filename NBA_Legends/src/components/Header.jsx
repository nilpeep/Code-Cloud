import React from 'react'
import image from "../assets/nba-logo.png"

const Header = () => {
  return (
    <div>
        <img src={image} alt="" />
        <h1>NBA LEGENDS</h1>
        <input type="text" placeholder=' Search player...'/>
    </div>
  )
}

export default Header