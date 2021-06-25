import { useSelector } from "react-redux";
import { selectCountry } from "../slices/locationSlice";
import { selectFilteredStaysCount } from "../slices/staysSlice";

const Stays = () => {
  const selectedCountry = useSelector(selectCountry);
  const staysCount = useSelector(selectFilteredStaysCount);

  return (
    <section className="mt-9 flex justify-between font-montserrat items-center">
      <div className="text-gray-darkest text-lg font-bold md:text-2xl">
        Stays in {selectedCountry}
      </div>
      <div className="text-gray-dark text-sm font-medium">
        {staysCount} {String(staysCount) === "1" ? "stay" : "stays"}
      </div>
    </section>
  );
};

export default Stays;
