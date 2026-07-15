"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

export const NewTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    console.log("form submited");
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="-ml-10 w-6/12 rounded-lg border-2 border-gray-200 py-2 pr-3 pl-3 transition-all outline-none focus:border-sky-500"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="ml-2 flex items-center justify-center rounded bg-sky-500 p-2 text-white transition-all hover:bg-sky-700"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        //TODO: onClick={ () => deleteCompleted() }
        type="button"
        className="ml-2 flex items-center justify-center rounded bg-red-400 p-2 text-white transition-all hover:bg-red-700"
      >
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};
