import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart Counter",
  description: "A simple counter page",
};

export default function CounterPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <span>Productos en carrito</span>
      <CartCounter value={20} />
    </div>
  );
}
