"use client";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "A simple counter page",
};

export default function CounterPage() {
  const [counter, setCounter] = useState(10);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <span>Productos en carrito</span>
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
    </div>
  );
}
