import { useState } from "react";
import data from "./assets/data/stays.json";

import { useSelector } from "react-redux";
import { selectGuestsSum } from "./slices/guestsSlice";
import { selectLocation } from "./slices/locationSlice";

import FilterDrawer from "./components/FilterDrawer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropertiesList from "./components/PropertiesList";
import Stays from "./components/Stays";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const guestsCount = useSelector(selectGuestsSum);
  const selectedLocation = useSelector(selectLocation);

  const filteredData = data.filter(
    (location) =>
      location.city === selectedLocation.city &&
      location.country === selectedLocation.country &&
      location.maxGuests >= guestsCount
  );

  return (
    <div className="px-5 m-auto max-w-screen-xl">
      <Header setIsModalOpen={setIsModalOpen} />
      <Stays stays={filteredData.length} />
      <PropertiesList properties={filteredData} />
      <Footer />
      <FilterDrawer
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        locations={data}
      />
    </div>
  );
};

export default App;
