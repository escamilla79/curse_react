import React from "react";
import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import List from "../components/List";

export const Basic = () => {
  const [data, setData] = useState(["Goku", "Tanjiro", "chanchito feliz"]);
  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData([...data.slice(0, -1)]);

  return (
    <div>
      <Card>
        <Button onClick={addMinion}> Agregar </Button>
        <Button onClick={delMinion}> Eliminar </Button>
        <List data={data}></List>
      </Card>
    </div>
  );
};
