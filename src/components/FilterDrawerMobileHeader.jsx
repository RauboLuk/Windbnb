import CloseIcon from "@material-ui/icons/Close";

const FilterDrawerMobileHeader = ({ closeModal }) => {
  return (
    <header className="flex flex-row justify-between text-gray-darkest text-xs items-center md:hidden">
      <div className="font-bold">Edit your search</div>
      <button data-testid="closeBtn" onClick={closeModal}>
        <CloseIcon data-testid="closeIcon" />
      </button>
    </header>
  );
};

export default FilterDrawerMobileHeader;
