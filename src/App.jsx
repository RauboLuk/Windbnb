import data from "./assets/data/stays.json";
import FilterDrawer from "./components/FilterDrawer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropertiesList from "./components/PropertiesList";
import Stays from "./components/Stays";

const App = () => {
  return (
    <div className="px-5 m-auto max-w-screen-xl">
      <Header />
      <Stays country={data[0].country} stays={12} />
      <PropertiesList properties={data} />
      <Footer />
      <FilterDrawer isModalOpen={false} location={{ country: "Finland", city: "Helsinki" }} />
    </div>
  );
};

export default App;
