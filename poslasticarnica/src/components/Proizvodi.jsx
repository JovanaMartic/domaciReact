import React from 'react'
import Proizvod from './Proizvod'

const Proizvodi = ({przi, dodaj, oduzmi}) => {
  return (
    <div className='proizvodi'>

{przi.map((prod) => (
        <Proizvod pr = {prod} key={prod.id} dodaj={dodaj} oduzmi = {oduzmi}/>
      ))}
    </div>
  )
}

export default Proizvodi