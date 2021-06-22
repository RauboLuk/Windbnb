import { useState } from "react";
import data from "./assets/data/stays.json";
import FilterDrawer from "./components/FilterDrawer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropertiesList from "./components/PropertiesList";
import Stays from "./components/Stays";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    city: data[0].city,
    country: data[0].country,
  });
  const [guests, setGuests] = useState({ adults: 0, children: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = data.filter(
    (location) =>
      location.city === selectedLocation.city &&
      location.country === selectedLocation.country &&
      location.maxGuests >= guests.adults + guests.children
  );

  return (
    <div className="px-5 m-auto max-w-screen-xl">
      <Header
        selectedLocation={selectedLocation}
        guests={guests}
        setIsModalOpen={setIsModalOpen}
      />
      <Stays country={filteredData[0].country} stays={filteredData.length} />
      <PropertiesList properties={filteredData} />
      <Footer />
      <FilterDrawer
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        locations={data}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        guests={guests}
        setGuests={setGuests}
      />
    </div>
  );
};

export default App;
