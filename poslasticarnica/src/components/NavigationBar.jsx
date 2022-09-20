import React from 'react'
import { FaBirthdayCake } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className='navigationBar'>
      <Link to="/">Pocetna</Link>
      <Link to="/pice">
        <FaBirthdayCake />
      </Link>
      </div>
  )
}

export default NavigationBar