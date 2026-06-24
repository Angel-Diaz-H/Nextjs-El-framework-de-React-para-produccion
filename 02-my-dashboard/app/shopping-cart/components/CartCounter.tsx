"use client";
import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button
          onClick={() => setCounter(counter + 1)}
          className="mr-2 flex w-25 items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600"
        >
          +1
        </button>

        <button
          onClick={() => setCounter(counter - 1)}
          className="mr-2 flex w-25 items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600"
        >
          -1
        </button>
      </div>
    </>
  );
};
