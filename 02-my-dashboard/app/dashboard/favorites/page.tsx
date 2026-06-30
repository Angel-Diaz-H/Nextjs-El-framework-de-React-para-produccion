import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { cacheLife, cacheTag, revalidateTag } from "next/cache";

export const metadata = {
  title: "Favoritos",
  description: "Pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="my-2 text-5xl">
        Pokemons favoritos <small className="text-blue-500">global state</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
