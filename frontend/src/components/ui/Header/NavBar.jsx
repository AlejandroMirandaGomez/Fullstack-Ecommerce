import { Link, useLocation } from "react-router-dom";

import SubMenu from "./SubMenu";

import { CgMenu as HamburgerMenu } from "react-icons/cg";
import { CgChevronDown as DownArrow } from "react-icons/cg";

import { navigationData } from "../../../data/navigation";

function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="xl:px-40 lg:px-15 md:px-5 flex">
      <div className="px-4 pb-4 w-full flex justify-between items-center flex-wrap md:gap-4 md:flex-nowrap ">
        <div className="flex justify-center items-center gap-2 cursor-pointer px-5 py-2 w-full text-white font-semibold bg-sky-400 rounded-2xl order-1 shadow-md mt-4 md:mt-0 md:order-0 md:w-auto md:justify-end">
          <HamburgerMenu className="size-6" />
          <span className="md:hidden lg:inline">ALL CATEGORIES</span>
          <DownArrow className="size-6 ml-2 md:hidden lg:inline" />
        </div>

        <div className="flex flex-1 justify-center md:justify-end">
          <div className="flex justify-center items-center flex-wrap font-semibold xl:gap-2">
            {navigationData.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  to={item.url}
                  className="hover:bg-blue-50 hover:text-sky-400 hover:shadow-xs px-3 py-3 rounded-2xl flex gap-2 items-center justify-center group relative"
                >
                  <div
                    className={
                      "flex gap-2 items-center justify-center border-b-2 " +
                      (item.url === pathname ? "" : "border-transparent")
                    }
                  >
                    {Icon && <Icon className="size-5" />}
                    <span>{item.name}</span>

                    {Object.keys(item.submenu).length > 0 && (
                      <SubMenu data={item.submenu} />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
