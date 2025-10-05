import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  const [data, setData] = useState(["Goku", "Tanjiro", "chanchito feliz"]);
  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData([...data.slice(0, -1)]);

  return (
    <>
      <Card body={333}>
        <Button onClick={addMinion}> Agregar </Button>
        <Button onClick={delMinion}> Eliminar </Button>
        <List data={data}></List>
      </Card>
    </>
  );
}

export default App;
