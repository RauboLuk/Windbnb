import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

import { useSelector } from "react-redux";
import { selectGuestsSum } from "../slices/guestsSlice";
import { selectLocation } from "../slices/locationSlice";

import DrawerSelector from "./DrawerSelector";
import FilterDrawerMobileHeader from "./FilterDrawerMobileHeader";
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
        <FilterDrawerMobileHeader closeModal={closeModal} />
        <section className="my-4 shadow-default rounded-2xl text-gray-darkest md:flex">
          <DrawerSelector
            onClick={openLocationSelect}
            label="location"
            text={`${selectedLocation.city}, ${selectedLocation.country}`}
            placeholder="Add location"
            showPlaceholder={selectedLocation.city.length < 1}
            data-testid="locationSelector"
          />
          <div className="w-full border-t border-white-milk md:h-auto md:w-auto md:border-t-0 md:border-r"></div>
          <DrawerSelector
            onClick={openGuestsSelect}
            label="guests"
            text={`${guestsCount} guest${guestsCount !== 1 ? "s" : ""}`}
            placeholder="Add guests"
            showPlaceholder={guestsCount < 1}
            data-testid="guestsSelector"
          />
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
          <LocationSelect
            hidden={isLocationSelectVisible}
            data-testid="locationSelect"
          />

          <div className="md:flex-1 md:mx-16">
            <GuestsSelect
              hidden={isGuestsSelectVisible}
              data-testid="guestsSelect"
            />
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
