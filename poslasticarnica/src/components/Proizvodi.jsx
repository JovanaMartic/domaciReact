import React from 'react'
import Proizvod from './Proizvod'

const Proizvodi = ({przi}) => {
  return (
    <div className='proizvodi'>

{przi.map((prod) => (
        <Proizvod pr = {prod} br = {prod.amount} key={prod.id}/>
      ))}
    </div>
  )
}

export default Proizvodi