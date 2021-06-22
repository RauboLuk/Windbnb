import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useEffect } from "react";
import { useState } from "react";

const GuestsSelect = ({ hidden, setGuests }) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  // TODO fix reseting
  useEffect(() => {
    setGuests({
      adults,
      children,
    });
  }, [adults, children, setGuests]);

  const incAdults = () => {
    const newState = adults + 1;
    setAdults(newState);
  };
  const decAdults = () => {
    const newState = adults - 1;
    setAdults(newState);
  };
  const incChildren = () => {
    const newState = children + 1;
    setChildren(newState);
  };
  const decChildren = () => {
    const newState = children - 1;
    setChildren(newState);
  };

  return (
    <section
      className="mx-4 font-mulish font-bold text-sm text-gray-darkest"
      hidden={!hidden}
    >
      <div className="mt-4">
        <div>Adults</div>
        <div className="text-gray-light font-normal">Ages 13 or above</div>
      </div>
      <div className="text-sm mt-3 flex flex-row items-center gap-4">
        <button
          onClick={decAdults}
          disabled={adults < 1}
          data-testid="minusBtn"
          className="w-6 h-6 border rounded border-gray-g3 flex justify-center items-center"
        >
          <RemoveIcon className="text-gray-g3" fontSize="inherit" />
        </button>
        <span>{adults}</span>
        <button
          onClick={incAdults}
          disabled={adults > 98}
          data-testid="addBtn"
          className="w-6 h-6 border rounded border-gray-g3"
        >
          <AddIcon className="text-gray-g3 w-3 h-3" fontSize="inherit" />
        </button>
      </div>
      <div className="mt-8">
        <div>Children</div>
        <div className="text-gray-light font-normal">Ages 2-12</div>
      </div>
      <div className="text-sm mt-3 flex flex-row items-center gap-4">
        <button
          onClick={decChildren}
          disabled={children < 1}
          data-testid="minusBtn"
          className="w-6 h-6 border rounded border-gray-g3 flex justify-center items-center"
        >
          <RemoveIcon className="text-gray-g3" fontSize="inherit" />
        </button>
        <span>{children}</span>
        <button
          onClick={incChildren}
          disabled={children > 98}
          data-testid="addBtn"
          className="w-6 h-6 border rounded border-gray-g3"
        >
          <AddIcon className="text-gray-g3 w-3 h-3" fontSize="inherit" />
        </button>
      </div>
    </section>
  );
};

export default GuestsSelect;
