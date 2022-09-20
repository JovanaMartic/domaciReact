import React from 'react'

function Proizvod({pr, dodaj, oduzmi, kor}) {
    return (
      <div className='kartica'>  
        <img classname = "slika" src = "https:/picsum.photos/200" alt= "SLika"></img>
        <div className="kartica-body">
          <h3 className="kartica-naslov">{pr.naziv}</h3>
          <p className="kartica-sastojci">{pr.sastojci}</p>
          <p className="kartica-sastojci">Cena: {pr.cena}</p>
          <p className="kartica-sastojci">Kolicina: {pr.kolicina}</p>
        </div>

         {kor === 0 ? ( <>
        <p className="kartica-sastojci">Kolicina: {pr.kolicina}</p>
       <button
              className="btn"
              onClick={() => dodaj(pr.id)}
            > + </button>
        <button
              className="btn"
              onClick={() => oduzmi(pr.id)}
            > - </button>
             </>
          ): (<p className="kartica-sastojci">Kolicina: {pr.kolicina}</p>)}
        </div>
    )
  }

export default Proizvod