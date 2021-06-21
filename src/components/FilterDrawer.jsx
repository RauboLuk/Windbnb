import CloseIcon from "@material-ui/icons/Close";
import RoomIcon from "@material-ui/icons/Room";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const FilterDrawer = ({ isModalOpen, location }) => {
  if (!isModalOpen) return null;
  return (
    <section
      data-testid="drawer"
      className="font-mulish fixed top-0 left-0 w-full h-screen flex flex-col"
    >
      <section className="bg-white-default px-5 py-3">
        <header className="flex flex-row justify-between text-gray-darkest text-xs items-center">
          <div className="font-bold">Edit your search</div>
          <button data-testid="closeBtn">
            <CloseIcon data-testid="closeIcon" />
          </button>
        </header>
        <section className="my-4 shadow-default rounded-2xl text-gray-darkest">
          <button className="px-6 py-3 w-full text-left rounded-2xl">
            <p className="text-xxxs font-extrabold uppercase">location</p>
            <p
              className="text-sm font-normal mt-1"
              data-testid="currentLocation"
            >{`${location.city}, ${location.country}`}</p>
          </button>
          <div className="w-full border-t border-white-milk"></div>
          <button className="px-6 py-3 w-full text-left">
            <p className="text-xxxs font-extrabold uppercase">guests</p>
            <p className="text-sm font-normal mt-1">Add guests</p>
          </button>
        </section>

        {/* LOCATION SELECT */}
        <section className="text-gray-dark text-sm font-normal" hidden={!true}>
          <button className="flex flex-row gap-2 items-center p-4">
            <RoomIcon /> <p>Helsinki, Finland</p>
          </button>
          <button className="flex flex-row gap-2 items-center p-4">
            <RoomIcon />
            <p>Turku, Finland</p>
          </button>
          <button className="flex flex-row gap-2 items-center p-4">
            <RoomIcon />
            <p>Oulu, Finland</p>
          </button>
        </section>

        {/* GUESTS SELECT */}
        <section
          className="mx-4 font-mulish font-bold text-sm text-gray-darkest"
          hidden={!true}
        >
          <div className="mt-8">
            <div>Adults</div>
            <div className="text-gray-light font-normal">Ages 13 or above</div>
          </div>
          <div className="text-sm mt-3 flex flex-row items-center gap-4">
            <button className="w-6 h-6 border rounded border-gray-g3 flex justify-center items-center">
              <RemoveIcon className="text-gray-g3" fontSize="inherit" />
            </button>
            <span>0</span>
            <button className="w-6 h-6 border rounded border-gray-g3">
              <AddIcon className="text-gray-g3 w-3 h-3" fontSize="inherit" />
            </button>
          </div>
          <div className="mt-8">
            <div>Children</div>
            <div className="text-gray-light font-normal">Ages 2-12</div>
          </div>
          <div className="text-sm mt-3 flex flex-row items-center gap-4">
            <button className="w-6 h-6 border rounded border-gray-g3 flex justify-center items-center">
              <RemoveIcon className="text-gray-g3" fontSize="inherit" />
            </button>
            <span>0</span>
            <button className="w-6 h-6 border rounded border-gray-g3">
              <AddIcon className="text-gray-g3 w-3 h-3" fontSize="inherit" />
            </button>
          </div>
        </section>

        <div className="w-full flex justify-center mt-16 mb-6">
          <button
            data-testid="searchBtn"
            className="bg-red-default text-white-milk px-6 py-4 rounded-2xl opacity-90 shadow-default"
          >
            <SearchIcon />
            <span className="ml-2 text-sm">Search</span>
          </button>
        </div>
      </section>
      <div className="w-screen flex-1 bg-gray-dark opacity-40"></div>
    </section>
  );
};

export default FilterDrawer;
