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
  return (
    <>
      <h1>Vite + React</h1>
      <PrimerComponente></PrimerComponente>
      <SegundoComponente></SegundoComponente>
      <ListItem data={list}></ListItem>

      <Card></Card>
    </>
  );
}

export default App;
