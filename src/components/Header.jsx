import Logo from "../assets/images/logo.svg";
import SearchIcon from "@material-ui/icons/Search";

import { useSelector } from "react-redux";
import { selectGuestsSum } from "../slices/guestsSlice";
import { selectLocation } from "../slices/locationSlice";

const Header = ({ setIsModalOpen }) => {
  const guestsCount = useSelector(selectGuestsSum);
  const selectedLocation = useSelector(selectLocation);

  return (
    <header className="font-mulish font-normal text-sm grid gap-5 md:grid-cols-2 md:items-center md:mt-8">
      <img src={Logo} alt="logo" className="my-5 md:m-0" />
      <section
        onClick={() => setIsModalOpen(true)}
        data-testid="searchBar"
        className="min-w-min w-full mx-3 h-14 flex flex-row items-center rounded-2xl shadow-default md:mx-0 md:max-w-md md:justify-self-end"
      >
        <button className="w-6/12 h-full px-3 placeholder-gray-light text-gray-darkest text-left">
          {`${selectedLocation.city}, ${selectedLocation.country}`}
        </button>
        <div className="h-full border-r border-white-milk"></div>
        <button
          className={`w-5/12 h-full px-3 placeholder-gray-light text-gray-darkest text-left `}
        >
          {guestsCount > 0 ? (
            <span>
              {guestsCount} guest{guestsCount !== 1 && "s"}
            </span>
          ) : (
            <span className="text-gray-light">Add guests</span>
          )}
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
