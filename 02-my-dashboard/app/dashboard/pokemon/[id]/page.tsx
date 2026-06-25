import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pokemon = await getPokemon(id);

  return {
    title: `#${pokemon.id} - ${pokemon.name}`,
    description: `Información sobre el pokémon ${pokemon.name}`,
  };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache", //TODO: Cambiar en futuro

    // next: {
    //   revalidate: 60 * 60 * 24 * 30 * 6, // 6 meses
    // },
  }).then((res) => res.json());

  return pokemon;
};

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;
  const pokemon = await getPokemon(id);
  console.log(pokemon);
  return (
    <div>
      <h1>Pokemon {id}</h1>
      {/* {JSON.stringify(pok1emon)} */}
      {pokemon.name}
    </div>
  );
}
