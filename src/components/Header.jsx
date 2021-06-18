import Logo from "../assets/images/logo.svg";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({ openSearch }) => {
  return (
    <header className="font-mulish font-normal text-sm grid gap-5 px-5">
      <img src={Logo} alt="logo" className="my-5" />
      <section
        onClick={openSearch}
        data-testid="searchBar"
        style={{
          boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
        }}
        className="min-w-min mx-5 h-14 flex flex-row items-center rounded-2xl"
      >
        <input
          type="text"
          placeholder="Choose location"
          className="w-6/12 px-3 outline-none placeholder-gray-light text-gray-darkest"
        />
        <div className="h-full border-r border-white-milk"></div>
        <input
          type="text"
          placeholder="Add guests"
          className="w-5/12 px-3 outline-none placeholder-gray-light text-gray-darkest"
        />
        <div className="h-full border-r border-white-milk"></div>
        <SearchIcon
          data-testid="searchIcon"
          className="w-min m-4 text-red-default"
        />
      </section>
    </header>
  );
};

export default Header;
