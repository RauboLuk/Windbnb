import data from "./assets/data/stays.json";
import Header from "./components/Header";
import PropertyCard from "./components/PropertyCard";

const App = () => {
  return (
    <div>
      <Header />
      <PropertyCard location={data[0]} />
    </div>
  );
};

export default App;
