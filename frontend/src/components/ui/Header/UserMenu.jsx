import { Link } from "react-router-dom";

import Profile from "../../../assets/header/profile.svg";
import { MdOutlineShoppingCart as ShopCart } from "react-icons/md";

function UserMenu() {
  const CASH = 0.00;
  const NUMBER_ITEMS_CART = 4;

  return (
    <div className="flex items-center justify-between px-4 sm:justify-center gap-4 w-full sm:w-auto sm:pr-4 sm:pl-0">
      <Link
        to="/my-account"
        className="cursor-pointer hover:scale-105 border-2 p-2 rounded-4xl border-gray-200 shadow-sm"
      >
        <img src={Profile} alt="User Profile" className="w-5 h-5" />
      </Link>

      <div>${CASH.toFixed(2)}</div>

      <Link
        to="/shopping-cart"
        className="relative inline-flex items-center justify-center cursor-pointer hover:scale-105 border-2 p-2 rounded-4xl border-gray-200 bg-orange-50 shadow-sm"
      >
        <span className="absolute -top-1 -right-1 size-4 px-1 rounded-full bg-orange-600 text-white text-[11px] flex items-center justify-center">
          {NUMBER_ITEMS_CART > 0 && NUMBER_ITEMS_CART}
        </span>
        <ShopCart className="size-5 text-orange-700" />
      </Link>
    </div>
  );
}

export default UserMenu;