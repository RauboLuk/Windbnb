import Logo from "../assets/images/logo.svg";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({ openDrawer }) => {
  return (
    <header className="font-mulish font-normal text-sm grid gap-5 md:grid-cols-2 md:items-center md:mt-8">
      <img src={Logo} alt="logo" className="my-5 md:m-0" />
      <section
        onClick={openDrawer}
        data-testid="searchBar"
        className="min-w-min mx-3 h-14 flex flex-row items-center rounded-2xl shadow-default md:mx-0 md:w-max md:justify-self-end"
      >
        <button className="w-6/12 h-full px-3 placeholder-gray-light text-gray-darkest text-left">
          Helsinki, Finland
        </button>
        <div className="h-full border-r border-white-milk"></div>
        <button className="w-5/12 h-full px-3 placeholder-gray-light text-gray-darkest text-left">
          Add guests
        </button>
        <div className="h-full border-r border-white-milk"></div>
        <button>
          <SearchIcon
            data-testid="searchIcon"
            className="w-min m-4 text-red-default"
          />
        </button>
      </section>
    </header>
  );
};

export default Header;
