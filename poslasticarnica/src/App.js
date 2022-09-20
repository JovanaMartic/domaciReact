import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Proizvodi from './components/Proizvodi';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [proizvodi] = useState([
    {
      id: 1,
      naziv: "Bambino",
      sastojci:
        "Jaja, orah, Plazma keks, šlag krem, slatka pavlaka, čokoladno mleko, aroma vanile",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 2,
      naziv: "Cheesecake",
      sastojci:
        "Keks plazma, lešnik, mleko, šećet prah, želatin, miker maline, posna slstka pavlaka, krem sir, krokant, maskarpane sir, maslac, poslastičarski margarin Gioia, kristal šeer",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 3,
      naziv: "Rafaelo",
      sastojci:
        "Jaja, kokos, slatka pavlaka, purter, prah šećer",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 4,
      naziv: "Čoko malina",
      sastojci:
        "Jaja, šećer, brašno, maslac, biljna mast, crna čokolada, mleko, sredstvo za narastanje testa, slatka pavlaka, crna čokolada, miker malina",
      amount: 0,
      vrsta: "pice",
    },
  ]);

  // const [proizvodi] = useState(pice);

  function pice(){
    let proizvodi_pice = proizvodi.filter((prod) => prod.vrsta == "pice");
    return proizvodi_pice;
  }


  return (
    <BrowserRouter className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route
          path="/"
          element={<Proizvodi przi={proizvodi} />}
        />
        <Route path="/pice"
          element={<Proizvodi przi={pice()} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
