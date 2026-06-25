import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";
import { notFound } from "next/navigation";

const getPokEmons = async (
  limit = 20,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
    url: pokemon.url,
  }));

  // throw new Error("Esto es un error que no debería suceder");
  // throw notFound();
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokEmons(151);

  return (
    <div className="flex flex-col">
      <span className="my-2 text-5xl">
        Listado de Pokémons <small>estático</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
