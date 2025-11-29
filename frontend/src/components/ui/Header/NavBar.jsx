import { Link, useLocation } from "react-router-dom";

import { CgMenu as HamburgerMenu } from "react-icons/cg";
import { CgChevronDown as DownArrow } from "react-icons/cg";
import { TbMeat as Meat } from "react-icons/tb";
import { LuCakeSlice as Bakery } from "react-icons/lu";
import { FiCoffee as Drinks } from "react-icons/fi";

function NavBar() {
  const { pathname } = useLocation();
  const is_home = pathname === "/";
  const is_shop = pathname === "/shop";
  const is_meats = pathname === "/shop-meats";
  const is_bakery = pathname === "/shop-bakery";
  const is_drinks = pathname === "/shop-drinks";
  const is_blog = pathname === "/blog";
  const is_contact = pathname === "/contact";

  return (
    <nav className="xl:px-40 lg:px-20 md:px-10 flex">
      <div className="px-4 pt-4 pb-8 w-full flex justify-between items-center flex-wrap gap-4 md:flex-nowrap ">
        <div className="flex justify-center items-center gap-2 cursor-pointer px-5 py-2 w-full text-white font-semibold bg-sky-300 rounded-2xl order-1 shadow-md mt-4 md:mt-0 md:order-0 md:w-auto md:justify-end">
          <HamburgerMenu className="size-6" />
          <span>ALL CATEGORIES</span>
          <DownArrow className="size-6 ml-4" />
        </div>
        <div className="flex flex-1 justify-center md:justify-end flex-wrap font-semibold xl:gap-2">
          <Link to="/" className="navbar-link">
            <span
              className={"border-b-2 " + (is_home ? "" : "border-transparent")}
            >
              HOME
            </span>
          </Link>
          <Link to="/shop" className="navbar-link">
            <span
              className={"border-b-2 " + (is_shop ? "" : "border-transparent")}
            >
              SHOP
            </span>
          </Link>
          <Link to="/shop-meats" className="navbar-link">
            <div
              className={
                "flex gap-2 items-center justify-center border-b-2 " +
                (is_meats ? "" : "border-transparent")
              }
            >
              <Meat className="size-5" />
              <span>MEATS</span>
            </div>
          </Link>
          <Link to="/shop-bakery" className="navbar-link">
            <div
              className={
                "flex gap-2 items-center justify-center border-b-2 " +
                (is_bakery ? "" : "border-transparent")
              }
            >
              <Bakery className="size-5" />
              <span>BAKERY</span>
            </div>
          </Link>
          <Link to="/shop-drinks" className="navbar-link">
            <div
              className={
                "flex gap-2 items-center justify-center border-b-2 " +
                (is_drinks ? "" : "border-transparent")
              }
            >
              <Drinks className="size-5" />
              <span>DRINKS</span>
            </div>
          </Link>
          <Link to="/blog" className="navbar-link">
            <span
              className={"border-b-2 " + (is_blog ? "" : "border-transparent")}
            >
              BLOG
            </span>
          </Link>
          <Link to="/contact" className="navbar-link">
            <span
              className={
                "border-b-2 " + (is_contact ? "" : "border-transparent")
              }
            >
              CONTACT
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
