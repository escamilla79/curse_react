import { useState } from "react";

import "./App.css";
import PrimerComponente from "./components/PrimerComponente";
import SegundoComponente from "./components/SegundoComponente";
import Card from "./components/Card";
import ListItem from "./components/ListItem";
import Button from "./components/Button";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list = ["Goku", "tanjiro", "Eren"];
  const handleSelect = (element: string) => {
    console.log("Imprimiendo ", element);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <PrimerComponente></PrimerComponente>
      <SegundoComponente></SegundoComponente>
      <ListItem data={list} onSelect={handleSelect}></ListItem>
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola mundo
      </Button>

      <Card></Card>
    </>
  );
}

export default App;
