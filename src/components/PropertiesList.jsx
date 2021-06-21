import PropertyCard from "./PropertyCard";

const PropertiesList = ({ properties }) => {
  return (
    <main
      data-testid="propertiesList"
      className="w-max max-w-full m-auto mt-6 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {properties.map((prop, i) => {
        return <PropertyCard location={prop} key={i} />;
      })}
    </main>
  );
};

export default PropertiesList;
