import Pluralize from "pluralize";
import StarRateIcon from "@material-ui/icons/StarRate";

const PropertyCard = ({ location }) => {
  return (
    <section className="font-montserrat w-full">
      <img
        src={location.photo}
        alt={location.title}
        data-testid="img"
        className="h-64 w-full rounded-3xl object-cover"
      />
      <section className="my-3 flex flex-row items-center justify-start gap-2">
        {location.superHost && (
          <div
            data-testid="superHost"
            className="px-2 py-1 uppercase border border-gray-dark text-gray-dark rounded-xl font-bold text-xxs flex justify-items-center items-center md:text-xs"
          >
            SUPER HOST
          </div>
        )}
        <div className="text-gray-g3 font-medium text-xs flex-1 md:text-sm">
          {location.type}
          {location.beds && <> . {Pluralize("bed", location.beds, true)}</>}
        </div>
        <div className="text-gray-dark text-xs font-medium md:text-sm">
          <StarRateIcon data-testid="starIcon" className="text-red-default" />
          {location.rating}
        </div>
      </section>
      <section className="w-5/6 text-gray-darkest font-semibold text-sm overflow-hidden whitespace-nowrap overflow-ellipsis md:text-base ">
        {location.title}
      </section>
    </section>
  );
};

export default PropertyCard;
