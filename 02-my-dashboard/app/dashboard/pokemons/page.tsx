import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokEmons = async (
  limit = 20,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.name.split("/").at(-2)!,
    name: pokemon.name,
    url: pokemon.url,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokEmons(151);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center justify-center gap-10">
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg"
          }
          alt={"pokemon"}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
