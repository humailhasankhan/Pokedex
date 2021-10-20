import React from "react";
import { useState } from "react";

const CaughtPokemon = (props) => {
  let [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }
  function resetPokemonName() {
    setPokemonNameInput("");
  }

  function catchPokemons() {
    // let newPokemon = ["Bulbasur", "xyz", "chicken", "pigeon"];
    // let randomPokemon = Math.floor(Math.random() * newPokemon.length);
    if (pokemonNameInput !== "") {
      setCaught(caught.concat(pokemonNameInput));
    }
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemons}>Catch a Pokemon</button>
      <button onClick={resetPokemonName}>Reset</button>
      <ul>
        {caught.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
