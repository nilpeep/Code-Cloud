import React, { useState } from 'react'
import image from "../assets/nba-logo.png"
import HeaderStyle from "./style/Header.module.css"

const Header = ({onFilterChange}) => {
    const [val, setVal] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setVal(value);
        onFilterChange(value);
    }

  return (
    <div className={HeaderStyle.header} >
        <img src={image} alt="" />
        <h1 className={HeaderStyle.h1}>NBA LEGENDS</h1>
        <input className={HeaderStyle.input} type="text" placeholder=' Search player...' onChange={handleSearch}/>
    </div>
  )
}

export default Header