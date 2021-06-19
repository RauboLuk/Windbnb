import Pluralize from "pluralize";
import StarRateIcon from "@material-ui/icons/StarRate";

const PropertyCard = ({ location }) => {
  return (
    <section className="max-w-sm font-montserrat">
      <img
        src={location.photo}
        alt={location.title}
        data-testid="img"
        className="rounded-3xl"
      />
      <section className="my-3 flex flex-row items-center justify-start gap-2">
        {location.superHost && (
          <div
            data-testid="superHost"
            className="px-2 py-1 border border-gray-dark text-gray-dark rounded-xl font-bold text-xxs flex justify-items-center items-center"
          >
            SUPER HOST
          </div>
        )}
        <div className="text-gray-g3 font-medium text-xs flex-1">
          {location.type}
          {location.beds && <> . {Pluralize("bed", location.beds, true)}</>}
        </div>
        <div className="text-gray-dark text-xs font-medium">
          <StarRateIcon data-testid="starIcon" className="text-red-default" />
          {location.rating}
        </div>
      </section>
      <section className="w-5/6 text-gray-darkest font-semibold text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">{location.title}</section>
    </section>
  );
};

export default PropertyCard;
