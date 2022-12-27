import React from 'react'
import { FaBirthdayCake } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import {GiFruitBowl} from "react-icons/gi";
function NavigationBar() {
  return (
    <div className='navigationBar'>
      <Link to="/">Početna</Link>
      <Link to="/cokoladne" className='ikonica'>
        <FaBirthdayCake />
      </Link>
      <Link to="/vocne" className='ikonica'>
        <GiFruitBowl />
      </Link>
      <Link to="/korpa" className='ikonica'>
        <BsCartFill />
      </Link>
      </div>
  )
}

export default NavigationBar