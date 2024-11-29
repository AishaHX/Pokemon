import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import "./App.css";

function PokemonApplication() {
  const [pokemonLista, setPokemonLista] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    //nu hämtar jag listan med pokemon
    const fetchPokemonList = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      if (!response.ok) {
        throw new Error(
          `Something went wrong with fetching data ${response.status}`
        );
      }
      const data = await response.json();
      // setter datan som hämtades i setSelectedPokemon
      setPokemonLista(data.results);
      console.log(pokemonLista);
    };
    fetchPokemonList();
  }, []);

  const fetchPokemonDetails = () => {
    if (!selectedPokemon) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) =>
        console.error(
          "Something went wrong while fetching Pokémon data:",
          error
        )
      );
  };

  return (
    <div className="pokemonList">
      <select
        id=""
        onChange={(e) => setSelectedPokemon(e.target.value)}
        value={selectedPokemon}
      >
        <option value=""> Choose a Pokemonn</option>
        {pokemonLista.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {" "}
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={fetchPokemonDetails} className="btn-pok">
        Show
      </button>
      {pokemonData && <Pokemon data={pokemonData} />}
    </div>
  );
}

export default PokemonApplication;
