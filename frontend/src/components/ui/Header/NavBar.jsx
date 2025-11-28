import { Link } from "react-router-dom";

import HamburgerMenu from "../../../assets/hamburger-menu.svg";
import Down from "../../../assets/down-arrow-2.svg";
import Meat from "../../../assets/product-category/meat-2.svg";
import Bakery from "../../../assets/product-category/bread.svg";
import Drinks from "../../../assets/product-category/coffee-3.svg";

function NavBar() {
  return (
    <nav className="xl:px-40 lg:px-20 md:px-10 flex">
      <div className="px-4 pt-4 pb-8 w-full flex justify-between items-center flex-wrap gap-4 md:flex-nowrap">
        <div className="flex justify-center items-center gap-2 cursor-pointer px-2 py-2 w-full bg-blue-300 rounded-2xl order-1 mt-4 md:mt-0 md:order-0 md:w-auto md:justify-end">
          <img src={HamburgerMenu} alt="Hamburger Menu" className="size-6" />
          <div>ALL CATEGORIES</div>
          <img src={Down} alt="down" className="size-6 ml-5" />
        </div>
        <div className="flex flex-1 gap-4 justify-center md:justify-end flex-wrap">
          <Link to="/" className="">
            HOME
          </Link>
          <Link to="/shop" className="">
            SHOP
          </Link>
          <Link to="/shop" className="flex gap-2 items-center justify-center">
            <img src={Meat} alt="Meat" className="size-5" />
            <p>MEATS</p>
          </Link>
          <Link to="/shop" className="flex gap-2 items-center justify-center">
            <img src={Bakery} alt="bakery" className="size-5" />
            <p>BAKERY</p>
          </Link>
          <Link to="/shop" className="flex gap-2 items-center justify-center">
            <img src={Drinks} alt="Drinks" className="size-5" />
            <p>DRINKS</p>
          </Link>
          <Link to="/shop" className="">
            BLOG
          </Link>
          <Link to="/shop" className="">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
