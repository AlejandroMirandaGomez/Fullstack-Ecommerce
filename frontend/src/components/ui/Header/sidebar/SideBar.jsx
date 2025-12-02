import { useState } from "react";
import { Link } from "react-router-dom";

import { sidebarNavigationData } from "../../../../data/sidebar-navigation";
import SidebarSubmenu from "./SidebarSubmenu";

import { CgChevronDown as DownArrow } from "react-icons/cg";

function SideBar() {
  // objeto donde cada key es el nombre del item y el valor es si está abierto o no
  const [openItems, setOpenItems] = useState({});

  return (
    <aside className="absolute pt-4 top-full left-0 font-semibold">
      <nav className="bg-gray-50 z-50 drop-shadow-xl rounded-md text-black shadow-md">
        <ul className="list-none flex flex-col whitespace-nowrap">
          {sidebarNavigationData.map((item) => {
            const Icon = item.icon;
            const hasSubmenu =
              Array.isArray(item.submenu) && item.submenu.length > 0;

            const isOpen = !!openItems[item.name];

            return (
              <li
                key={item.name}
                className={
                  "flex flex-col border-b " +
                  (isOpen ? "border-gray-300" : "border-transparent")
                }
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center py-2 px-8 gap-2 hover:text-sky-400">
                    {Icon && <Icon />}
                    <Link to={item.url}>{item.name}</Link>
                  </div>

                  {hasSubmenu && (
                    <button
                      type="button"
                      className="px-8 hover:text-sky-400"
                      onClick={() =>
                        setOpenItems((prev) => ({
                          ...prev,
                          [item.name]: !prev[item.name],
                        }))
                      }
                    >
                      <DownArrow
                        className={
                          "size-6 transition-transform " +
                          (isOpen ? "rotate-180" : "rotate-0")
                        }
                      />
                    </button>
                  )}
                </div>

                {isOpen && hasSubmenu && <SidebarSubmenu data={item.submenu} />}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
