import RoomIcon from "@material-ui/icons/Room";

const LocationSelect = ({ hidden, locations, setSelectedLocation }) => {
  const uniqueLocations = [
    ...new Set(locations?.map((loc) => `${loc.city}, ${loc.country}`)),
  ].map((loc) => ({
    city: loc.split(", ")[0],
    country: loc.split(", ")[1],
  }));

  const handleLocationChange = (e, location) => {
    e.preventDefault();
    setSelectedLocation(location);
  };

  return (
    <section className="text-gray-dark text-sm font-normal" hidden={!hidden}>
      {uniqueLocations?.map((loc, i) => {
        return (
          <button
            className="flex flex-row gap-2 items-center p-4 w-full"
            key={`${loc.city}, ${loc.country}, ${i}`}
            onClick={(e) => handleLocationChange(e, loc)}
          >
            <RoomIcon data-testid="locationIcon" />
            <p>{`${loc.city}, ${loc.country}`}</p>
          </button>
        );
      })}
    </section>
  );
};

export default LocationSelect;
