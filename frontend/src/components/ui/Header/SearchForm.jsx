import SearchIcon from "../../../assets/search.svg";

function SearchForm({ handleSearch, searchTerm, setSearchTerm }) {
  return (
    <div className="flex-1 px-4 flex items-center justify-center order-1 min-w-screen sm:order-0 sm:min-w-0">
      <form
        action=""
        onSubmit={handleSearch}
        className="flex bg-gray-200 rounded-lg w-full focus-within:ring-1 focus-within:ring-gray-400 shadow-md"
      >
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="flex-1 p-3 outline-none focus:outline-none"
        />
        <button
          type="submit"
          className="p-3 md:flex-none cursor-pointer hover:scale-110 w-12 justify-center items-center flex"
        >
          <img src={SearchIcon} alt="Search" className="" />
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
