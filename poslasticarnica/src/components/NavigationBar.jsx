import React from 'react'
import { FaBirthdayCake } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

function NavigationBar() {
  return (
    <div className='navigationBar'>
      <Link to="/">Pocetna</Link>
      <Link to="/pice" className='ikonica'>
        <FaBirthdayCake />
      </Link>
      <Link to="/korpa" className='ikonica'>
        <BsCartFill />
      </Link>
      </div>
  )
}

export default NavigationBar