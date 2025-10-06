import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(1);

  const handleAnterior = () => {
    id > 1 && setId(id - 1);
  };

  const handleSiguiente = () => {
    setId(id + 1);
  };

  console.log(id);

  console.log(pokemon);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [id]);
  return (
    <div>
      {pokemon && (
        <div>
          <h2>{pokemon.id}</h2>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <br></br>
          <button onClick={handleAnterior}>Anterior</button>
          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
