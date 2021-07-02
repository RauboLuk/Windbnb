import LinearProgress from '@material-ui/core/LinearProgress';

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchStays, selectStatus } from "./slices/staysSlice";

import FilterDrawer from "./components/FilterDrawer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropertiesList from "./components/PropertiesList";
import Stays from "./components/Stays";

const App = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchStays());
    // eslint-disable-next-line
  }, []);

  if (["loading", "idle"].includes(status)) return <LinearProgress />;

  return (
    <div className="px-5 m-auto max-w-screen-xl">
      <Header setIsModalOpen={setIsModalOpen} />
      <Stays />
      <PropertiesList />
      <Footer />
      <FilterDrawer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default App;
