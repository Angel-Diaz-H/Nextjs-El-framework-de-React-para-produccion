interface Props {
  params: { id: string };
}

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;

  console.log(id);
  return (
    <div>
      <h1>Pokemon {id}</h1>
    </div>
  );
}
