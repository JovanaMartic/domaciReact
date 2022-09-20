import React from 'react'

function Proizvod({pr, br}) {
    return (
      <div className='kartica'>  
        <img classname = "kartica-slika" src = "https:/picsum.photos/200" alt= "SLika"></img>
        <div className="kartica-body">
          <h3 className="kartica-naslov">{pr.naziv}</h3>
          <p className="kartica-sastojci">{pr.sastojci}</p>
          <p className="kartica-sastojci">{br}</p>
        </div>
        <button className="btn">+</button>
        <button className="btn">-</button>
      </div>
  )
}

export default Proizvod