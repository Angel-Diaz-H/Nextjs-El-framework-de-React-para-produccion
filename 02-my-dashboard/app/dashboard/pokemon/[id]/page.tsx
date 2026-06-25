import { Pokemon } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";

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
  const pokemon: Pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    {
      cache: "force-cache", //TODO: Cambiar en futuro

      // next: {
      //   revalidate: 60 * 60 * 24 * 30 * 6, // 6 meses
      // },
    },
  ).then((res) => res.json());
  console.log(`Se cargó ${pokemon.name}`);

  return pokemon;
};

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;
  const pokemon = await getPokemon(id);

  return (
    <div className="mt-5 flex flex-col items-center text-slate-800">
      <div className="relative mx-auto flex w-175 flex-col items-center rounded-[20px] bg-white bg-clip-border p-3 shadow-lg">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />

            <div className="flex flex-wrap">
              {pokemon.moves.map((move) => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 px-2">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-navy-700 flex text-base font-medium">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-navy-700 flex text-base font-medium">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
