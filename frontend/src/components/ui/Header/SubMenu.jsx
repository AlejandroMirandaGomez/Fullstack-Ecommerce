import { Link } from "react-router-dom";

function SubMenu({ data }) {
  return (
    <div className="absolute z-50 top-full pt-4 invisible group-hover:visible -translate-y-3 group-hover:translate-y-0 transition-none group-hover:transition-all duration-700 ease-out">
      <div className=" text-black min-w-36 bg-gray-50 drop-shadow-xl shadow rounded-xl overflow-hidden flex flex-col items-start justify-start whitespace-nowrap">
        {data?.map((item) => (
          <Link
            to={item.url}
            key={item.name}
            className="w-full hover:bg-blue-50 pl-4 py-1 pr-8"
          >
            <button className="self-start uppercase">{item.name}</button>
            <br />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SubMenu;
