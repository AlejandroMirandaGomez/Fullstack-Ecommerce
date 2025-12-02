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
                className="flex items-center py-0.5 px-8 gap-2 hover:text-sky-400 text-neutral-700"
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
