import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

import { useSelector } from "react-redux";
import { selectGuestsSum } from "../slices/guestsSlice";
import { selectLocation } from "../slices/locationSlice";

import GuestsSelect from "./GuestsSelect";
import LocationSelect from "./LocationSelect";

const FilterDrawer = ({ isModalOpen, setIsModalOpen }) => {
  const [isGuestsSelectVisible, setIsGuestsSelectVisible] = useState(false);
  const [isLocationSelectVisible, setIsLocationSelectVisible] = useState(false);

  const guestsCount = useSelector(selectGuestsSum);
  const selectedLocation = useSelector(selectLocation);

  if (!isModalOpen) return null;

  const openLocationSelect = () => {
    setIsGuestsSelectVisible(false);
    setIsLocationSelectVisible(true);
  };
  const openGuestsSelect = () => {
    setIsLocationSelectVisible(false);
    setIsGuestsSelectVisible(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = () => {
    closeModal();
  };

  return (
    <section
      data-testid="drawer"
      className="font-mulish fixed top-0 left-0 w-full h-screen flex flex-col"
    >
      <section className="bg-white-default px-5 py-3">
        <header className="flex flex-row justify-between text-gray-darkest text-xs items-center">
          <div className="font-bold">Edit your search</div>
          <button data-testid="closeBtn" onClick={closeModal}>
            <CloseIcon data-testid="closeIcon" />
          </button>
        </header>
        <section className="my-4 shadow-default rounded-2xl text-gray-darkest md:flex">
          <button
            onClick={openLocationSelect}
            className="px-6 py-3 w-full text-left rounded-2xl md:flex-1"
          >
            <p className="text-xxxs font-extrabold uppercase">location</p>
            <p
              className="text-sm font-normal mt-1"
              data-testid="currentLocation"
            >{`${selectedLocation.city}, ${selectedLocation.country}`}</p>
          </button>
          <div className="w-full border-t border-white-milk md:h-auto md:w-auto md:border-t-0 md:border-r"></div>
          <button
            onClick={openGuestsSelect}
            className="px-6 py-3 w-full text-left md:flex-1"
          >
            <p className="text-xxxs font-extrabold uppercase">guests</p>
            <p className="text-sm font-normal mt-1">
              {guestsCount > 0 ? (
                <span>
                  {guestsCount} guest{guestsCount !== 1 && "s"}
                </span>
              ) : (
                <span className="text-gray-light">Add guests</span>
              )}
            </p>
          </button>
          <div className="h-auto border-r border-white-milk hidden md:block"></div>

          <div className="flex-1">
            <button
              data-testid="searchBtn"
              className="w-max m-auto bg-red-default text-white-milk px-7 py-4 rounded-2xl opacity-90 shadow-default hidden md:block md:flex-1"
              onClick={handleSearch}
            >
              <SearchIcon />
              <span className="ml-2 text-sm">Search</span>
            </button>
          </div>
        </section>

        <section className="flex">
          <div
            className={`hidden md:flex-1 ${
              isGuestsSelectVisible ? "md:block" : null
            }`}
          ></div>
          {/* LOCATION SELECT */}
          <LocationSelect hidden={isLocationSelectVisible} />

          {/* GUESTS SELECT */}
          <div className="md:flex-1 md:mx-16">
            <GuestsSelect hidden={isGuestsSelectVisible} />
          </div>

          <div className="hidden md:block md:flex-1"></div>
        </section>

        <div className="w-full flex justify-center mt-16 mb-6">
          <button
            data-testid="searchBtn"
            className="bg-red-default text-white-milk px-6 py-4 rounded-2xl opacity-90 shadow-default md:hidden"
            onClick={handleSearch}
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
