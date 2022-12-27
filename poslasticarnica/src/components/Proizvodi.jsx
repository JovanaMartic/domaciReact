import React from 'react'
import Proizvod from './Proizvod.jsx'

const Proizvodi = ({przi, dodaj, oduzmi}) => {
  return (
    <div className='proizvodi'>

{przi.map((prod) => (
        <Proizvod pr = {prod} key={prod.id} dodaj={dodaj} oduzmi = {oduzmi} kor={0}/>
      ))}
    </div>
  )
}

export default Proizvodi