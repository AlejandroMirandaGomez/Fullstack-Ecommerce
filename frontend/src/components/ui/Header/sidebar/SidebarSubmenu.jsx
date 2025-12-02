import { Link } from "react-router-dom";

function SidebarSubmenu({ data }) {
  return (
    <aside className="pb-2">
      <nav>
        <ul>
          {data.map((item) => {
            return (
              <li
                key={item.name}
                className="flex items-center py-0.5 pr-8 pl-18 gap-2 hover:text-sky-400 "
              >
                <Link to={item.url} className="uppercase whitespace-nowrap">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default SidebarSubmenu;
