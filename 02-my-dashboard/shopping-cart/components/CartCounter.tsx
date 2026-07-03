"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne } from "@/store/counter/counterSlice";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  // const [counter, setCounter] = useState(value);
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="mr-2 flex w-25 items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(substractOne())}
          className="mr-2 flex w-25 items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600"
        >
          -1
        </button>
      </div>
    </>
  );
};
