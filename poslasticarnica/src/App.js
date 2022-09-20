import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Proizvodi from './components/Proizvodi';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Korpa from './components/Korpa';


function App() {

  const [korpaBroj, postaviKorpaBroj] = useState(0);
  const [korpaProizvodi, postaviKorpaProizvodi] = useState([]);

  const [proizvodi] = useState([
    {
      id: 1,
      naziv: "Bambino",
      sastojci:
        "Jaja, orah, Plazma keks, šlag krem, slatka pavlaka, čokoladno mleko, aroma vanile",
      amount: 0,
      kolicina: 0,
      vrsta: "pice",
      cena: 700,
    },
    {
      id: 2,
      naziv: "Cheesecake",
      sastojci:
        "Keks plazma, lešnik, mleko, šećet prah, želatin, miker maline, posna slstka pavlaka, krem sir, krokant, maskarpane sir, maslac, poslastičarski margarin Gioia, kristal šeer",
      amount: 0,
      kolicina: 0,
      vrsta: "pice",
      cena: 700,
    },
    {
      id: 3,
      naziv: "Rafaelo",
      sastojci:
        "Jaja, kokos, slatka pavlaka, purter, prah šećer",
      amount: 0,
      kolicina: 0,
      vrsta: "pice",
      cena: 700,
    },
    {
      id: 4,
      naziv: "Čoko malina",
      sastojci:
        "Jaja, šećer, brašno, maslac, biljna mast, crna čokolada, mleko, sredstvo za narastanje testa, slatka pavlaka, crna čokolada, miker malina",
      amount: 0,
      kolicina: 0,
      vrsta: "pice",
      cena: 700,
    },
  ]);

  // const [proizvodi] = useState(pice);

  function vrsta(v){
    let proizvodi_pice = proizvodi.filter((prod) => prod.vrsta === v);
    return proizvodi_pice;
  }

  function korpa() {
    let pKorpa = proizvodi.filter((prod) => prod.kolicina > 0);
    postaviKorpaProizvodi(pKorpa);
  }

  function dodaj(id) {

    postaviKorpaBroj(korpaBroj + 1);

    proizvodi.forEach((prod) => {
      if (prod.id === id) {
        prod.kolicina++;
      }
      console.log(prod.kolicina);

    });

    korpa();
  }

    function oduzmi(id) {
      if (korpaBroj > 0 ) postaviKorpaBroj(korpaBroj - 1);

      proizvodi.forEach((prod) => {
        if (prod.id === id) {
          if(prod.kolicina > 0){
          prod.kolicina--;
          }
        }
        console.log(prod.kolicina);
        korpa();
      });
    }




  return (
    <BrowserRouter className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route
          path="/"
          element={<Proizvodi przi={proizvodi} dodaj={dodaj} oduzmi = {oduzmi}/>}
        />
        <Route path="/pice"
         element={<Proizvodi przi={vrsta("pice")} dodaj = {dodaj} oduzmi = {oduzmi} />} />
         <Route path="/burgeri"
             element={<Proizvodi przi={vrsta("burgeri") }  dodaj = {dodaj} oduzmi = {oduzmi}/>} />
   
             <Route path="/korpa" element={<Korpa proizvodi={korpaProizvodi} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
