import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import GuestsSelect from "./GuestsSelect";
import LocationSelect from "./LocationSelect";

const FilterDrawer = ({ isModalOpen, location, locations }) => {
  const [isGuestsSelectVisible, setIsGuestsSelectVisible] = useState(false);
  const [isLocationSelectVisible, setIsLocationSelectVisible] = useState(false);

  if (!isModalOpen) return null;

  const openLocationSelect = () => {
    setIsGuestsSelectVisible(false);
    setIsLocationSelectVisible(true);
  };
  const openGuestsSelect = () => {
    setIsLocationSelectVisible(false);
    setIsGuestsSelectVisible(true);
  };

  return (
    <section
      data-testid="drawer"
      className="font-mulish fixed top-0 left-0 w-full h-screen flex flex-col"
    >
      <section className="bg-white-default px-5 py-3">
        <header className="flex flex-row justify-between text-gray-darkest text-xs items-center">
          <div className="font-bold">Edit your search</div>
          <button data-testid="closeBtn">
            <CloseIcon data-testid="closeIcon" />
          </button>
        </header>
        <section className="my-4 shadow-default rounded-2xl text-gray-darkest">
          <button
            onClick={openLocationSelect}
            className="px-6 py-3 w-full text-left rounded-2xl"
          >
            <p className="text-xxxs font-extrabold uppercase">location</p>
            <p
              className="text-sm font-normal mt-1"
              data-testid="currentLocation"
            >{`${location.city}, ${location.country}`}</p>
          </button>
          <div className="w-full border-t border-white-milk"></div>
          <button
            onClick={openGuestsSelect}
            className="px-6 py-3 w-full text-left"
          >
            <p className="text-xxxs font-extrabold uppercase">guests</p>
            <p className="text-sm font-normal mt-1">Add guests</p>
          </button>
        </section>

        {/* LOCATION SELECT */}
        <LocationSelect hidden={isLocationSelectVisible} locations={locations} />

        {/* GUESTS SELECT */}
        <GuestsSelect hidden={isGuestsSelectVisible} />

        <div className="w-full flex justify-center mt-16 mb-6">
          <button
            data-testid="searchBtn"
            className="bg-red-default text-white-milk px-6 py-4 rounded-2xl opacity-90 shadow-default"
          >
            <SearchIcon />
            <span className="ml-2 text-sm">Search</span>
          </button>
        </div>
      </section>
      <div className="w-screen flex-1 bg-gray-dark opacity-40"></div>
    </section>
  );
};

export default FilterDrawer;
