"use client";
import Image from "next/image";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";
import { Product } from "../data/products";
import { Star } from "./Star";
import {
  addProductToCart,
  removeProductFromCart,
} from "@/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { id, name, price, rating, image } = product;
  const router = useRouter();
  const onAddToCart = () => {
    addProductToCart(id);
    router.refresh();
  };

  const onRemoveFromCart = () => {
    removeProductFromCart(id);
    router.refresh();
  };

  return (
    <div className="max-w-sm rounded-lg border-gray-100 bg-white shadow">
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={500}
          height={500}
          className="rounded"
          src={image}
          alt={name}
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900">
            {name}
          </h3>
        </a>
        <div className="mt-2.5 mb-5 flex items-center">
          {/* Stars */}
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <Star key={i} />
            ))}

          {/* Rating Number */}
          <span className="mr-2 ml-3 rounded bg-blue-200 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
            {rating.toFixed(2)}
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-3xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>

          <div className="flex">
            <button
              onClick={onAddToCart}
              className="mr-2 cursor-pointer rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-800"
            >
              <IoAddCircleOutline size={25} />
            </button>
            <button
              onClick={onRemoveFromCart}
              className="cursor-pointer rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:ring-4 focus:ring-red-800"
            >
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
