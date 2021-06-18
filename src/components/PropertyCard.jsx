import Pluralize from "pluralize";
import StarRateIcon from "@material-ui/icons/StarRate";

const PropertyCard = ({ location }) => {
  return (
    <section>
      <img
        src={location.photo}
        alt={location.title}
        data-testid="img"
        className="rounded-3xl"
      />
      <section>
        {location.superHost && <div data-testid="superHost">SUPER HOST</div>}
        <div>
          {location.type}
          {location.beds && <> . {Pluralize("bed", location.beds, true)}</>}
        </div>
        <div>
          {location.rating}
          <StarRateIcon data-testid="starIcon" className="text-red-default" />
        </div>
      </section>
      <section>{location.title}</section>
    </section>
  );
};

export default PropertyCard;
