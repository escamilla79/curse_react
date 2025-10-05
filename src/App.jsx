import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PrimerComponente from "./components/PrimerComponente";
import SegundoComponente from "./components/SegundoComponente";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <PrimerComponente></PrimerComponente>
      <SegundoComponente></SegundoComponente>
      <Card></Card>
    </>
  );
}

export default App;
