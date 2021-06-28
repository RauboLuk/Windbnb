import RoomIcon from "@material-ui/icons/Room";

import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../slices/locationSlice";
import { selectStays } from "../slices/staysSlice";

const LocationSelect = ({ hidden, ...other }) => {
  const stays = useSelector(selectStays);
  const dispatch = useDispatch();

  const uniqueLocations = [
    ...new Set(stays?.map((loc) => `${loc.city}, ${loc.country}`)),
  ].map((loc) => ({
    city: loc.split(", ")[0],
    country: loc.split(", ")[1],
  }));

  const handleLocationChange = (e, location) => {
    e.preventDefault();
    dispatch(setLocation(location));
  };

  return (
    <section
      className="text-gray-dark text-sm font-normal"
      hidden={!hidden}
      {...other}
    >
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
