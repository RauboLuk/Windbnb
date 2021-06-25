import { useSelector } from "react-redux";
import { selectFilteredStays } from "../slices/staysSlice";

import PropertyCard from "./PropertyCard";

const PropertiesList = () => {
  const properties = useSelector(selectFilteredStays);

  return (
    <main
      data-testid="propertiesList"
      className="w-max max-w-full m-auto mt-6 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {properties.length === 0 ? (
        <p>There are no properties that meets the criteria.</p>
      ) : (
        properties.map((prop, i) => {
          return <PropertyCard location={prop} key={i} />;
        })
      )}
    </main>
  );
};

export default PropertiesList;
