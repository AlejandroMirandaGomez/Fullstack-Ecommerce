import { Link } from "react-router-dom";

import profile from "../../../assets/profile.svg";
import shopCart from "../../../assets/shop-cart.svg";

function UserMenu() {
  return (
    <div className="flex items-center justify-center pr-4">
      <Link to="/my-account" className="cursor-pointer hover:scale-105 border-2 p-2 rounded-4xl border-gray-200">
        <img src={profile} alt="User Profile" className="w-5 h-5" />
      </Link>

      <Link to="/shopping-cart" className="cursor-pointer hover:scale-105 ml-4 border-2 p-2 rounded-4xl border-gray-200">
        <img src={shopCart} alt="Shopping Cart" className="w-5 h-5" />
      </Link>
    </div>
  );
}

export default UserMenu;