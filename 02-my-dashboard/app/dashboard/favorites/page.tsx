import { FavoritePokemons, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Pokemons",
};

interface Props {
  pokemon: SimplePokemon;
}

export default async function PokemonsPage({ pokemon }: Props) {
  return (
    <div className="flex flex-col">
      <span className="my-2 text-5xl">
        Pokemons favoritos <small className="text-blue-500">global state</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
