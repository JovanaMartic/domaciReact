import Proizvod from "./Proizvod";


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
        <p>  Ukupna cena : {zbir()}</p>
        </>
      );
};

export default Korpa;