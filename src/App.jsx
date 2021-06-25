import { useEffect, useState } from "react";
import data from "./assets/data/stays.json";

import { useDispatch } from "react-redux";
import { setStays } from "./slices/staysSlice";

import FilterDrawer from "./components/FilterDrawer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropertiesList from "./components/PropertiesList";
import Stays from "./components/Stays";

const App = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(setStays(data));
  }, []);

  return (
    <div className="px-5 m-auto max-w-screen-xl">
      <Header setIsModalOpen={setIsModalOpen} />
      <Stays />
      <PropertiesList />
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
