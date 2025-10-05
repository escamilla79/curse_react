import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PrimerComponente from "./components/PrimerComponente";
import SegundoComponente from "./components/SegundoComponente";
import Card from "./components/Card";
import ListItem from "./components/ListItem";

function App() {
  const list = ["Goku", "tanjiro", "Eren"];
  const handleSelect = (element: string) => {
    console.log("Imprimiendo ", element);
  };
  const handleSelect2 = (element: string) => {
    console.log("Reportando  ", element);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <PrimerComponente></PrimerComponente>
      <SegundoComponente></SegundoComponente>
      <ListItem data={list} onSelect={handleSelect}></ListItem>
      <ListItem data={list} onSelect={handleSelect2}></ListItem>

      <Card></Card>
    </>
  );
}

export default App;
