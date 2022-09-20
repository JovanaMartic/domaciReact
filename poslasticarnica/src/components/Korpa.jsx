import Proizvod from "./Proizvod";


const Korpa = ({ proizvodi }) => {
    function zbir(){
        var z = 0;
        proizvodi.forEach((prod) => {
            z = z + prod.cena;
          });
          return z;
    }
  return (
    <div className="cart-container">
      <h3>This is your cart.</h3>
      {proizvodi.map((prod) => (
        <Proizvod pr={prod} key={prod.id} />
      ))}

      <p>Ukuona cena : {zbir()}</p>
    </div>
  );
};

export default Korpa;