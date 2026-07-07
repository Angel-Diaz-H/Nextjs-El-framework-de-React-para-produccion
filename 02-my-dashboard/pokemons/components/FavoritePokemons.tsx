"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites),
  );
  return (
    <>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favoritePokemons} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center">
      <IoHeartOutline size={200} className="text-red-500" />
      <span className="text-xl font-bold">No hay favoritos</span>
    </div>
  );
};
