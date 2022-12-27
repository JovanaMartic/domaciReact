import Proizvod from "./Proizvod";
import React from 'react'


const Korpa = ({ proizvodi }) => {
    function zbir(){
        var z = 0;
        proizvodi.forEach((prod) => {
            z = z + prod.cena * prod.kolicina;
          });
          return z;
    }
    return (
        <>
        <div className="proizvodi">
          {proizvodi.map((prod) => (
            <Proizvod pr={prod} key={prod.id} kor={1}/>
          ))}
        </div>
        <h3>  Ukupna cena : {zbir()}</h3>
        </>
      );
};

export default Korpa;