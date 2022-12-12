import React from 'react'
import bambino from 'C:/xampp/htdocs/domaciReact/poslasticarnica/src/slike/bam.jpeg';
import cheese from 'C:/xampp/htdocs/domaciReact/poslasticarnica/src/slike/cheese.jpeg';
import coko from 'C:/xampp/htdocs/domaciReact/poslasticarnica/src/slike/cokoo.jpeg';
import rafaelo from 'C:/xampp/htdocs/domaciReact/poslasticarnica/src/slike/rafaeloo.jpeg';

function Proizvod({pr, dodaj, oduzmi, kor}) {
    return (
      <div className='kartica'> 
        
        <div className="kartica-body">
        {pr.slika === "bambino" ? (
        <img className = "slika" src={bambino}></img>
          ): (
            pr.slika === "rafaelo" ? (
              <img className = "slika" src={rafaelo}></img>
                ): (
                  pr.slika === "cokomalina" ? (
                    <img className = "slika" src={coko}></img>
                      ): (
                        <img className = "slika" src={cheese}></img>
                          )
                    )
              )}
          <h3 className="kartica-naslov">{pr.naziv}</h3>
          <p className="kartica-sastojci">{pr.sastojci}</p>
          <p className="kartica-sastojci">Cena: {pr.cena}</p>
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