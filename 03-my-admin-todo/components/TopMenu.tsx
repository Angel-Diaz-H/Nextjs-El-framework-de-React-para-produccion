import { cookies } from "next/headers";
import {
  CiBellOn,
  CiChat1,
  CiMenuBurger,
  CiSearch,
  CiShoppingBasket,
} from "react-icons/ci";

const getTotalCount = (cart: { [id: string]: number }) => {
  let items = 0;
  Object.values(cart).forEach((value) => {
    items += value as number;
  });
  return items;
};
export const TopMenu = async () => {
  const cookieStore = await cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value || "{}");
  const totalItems = getTotalCount(cart);

  return (
    <div className="sticky top-0 z-10 h-16 border-b bg-white lg:py-2.5">
      <div className="flex items-center justify-between space-x-4 px-6">
        <h5 hidden className="text-2xl font-medium text-gray-600 lg:block">
          Dashboard
        </h5>
        <button className="-mr-2 h-16 w-12 border-r lg:hidden">
          <CiMenuBurger size={30} />
        </button>
        <div className="flex space-x-2">
          <div hidden className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3">
                <CiSearch />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full rounded-xl border border-gray-300 py-2.5 pr-4 pl-14 text-sm text-gray-600 transition outline-none focus:border-cyan-300"
              />
            </div>
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
            <CiSearch />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            <CiChat1 size={25} />
          </button>
          <button className="flex h-10 w-15 items-center justify-center gap-1 rounded-xl border bg-gray-100 font-bold focus:bg-gray-100 active:bg-gray-200">
            {totalItems > 0 && (
              <span className="gap-2 text-sm">{totalItems}</span>
            )}
            <CiShoppingBasket size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};
