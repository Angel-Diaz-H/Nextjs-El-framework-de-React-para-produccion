import { FavoritePokemons } from "@/pokemons";

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
      <FavoritePokemons />
      {/* <NoFavorites /> */}
    </div>
  );
}
