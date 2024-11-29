import React from "react";
import "./App.css";

const Pokemon = ({ data }) => {
  const { name, sprites, types, weight, height } = data;

  return (
    <div className="pokemonDeais">
      <img src={sprites.front_default} alt="" />
      <p>Name: {name}</p>
      <p className="pokemonInfo">Type: {types.map((type) => type.type.name)}</p>
      <p className="pokemonInfo">Weight: {weight}</p>
      <p className="pokemonInfo">Height: {height}</p>
    </div>
  );
};

export default Pokemon;
