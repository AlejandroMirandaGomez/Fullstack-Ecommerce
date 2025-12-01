import Icon from "./Icon";
import SearchForm from "./SearchForm";
import UserMenu from "./UserMenu";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="border-b border-gray-300">
      <div>
        <div className="flex flex-wrap h-auto py-4 gap-4 w-screen items-center justify-between lg:gap-20 xl:px-40 lg:px-15 md:px-5">
          <Icon />
          <SearchForm />
          <UserMenu />
        </div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
