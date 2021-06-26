const DrawerSelector = ({
  onClick,
  label,
  text,
  placeholder,
  showPlaceholder,
}) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 w-full text-left rounded-2xl md:flex-1"
    >
      <p className="text-xxxs font-extrabold uppercase">{label}</p>
      <p className="text-sm font-normal mt-1">
        {showPlaceholder ? (
          <span className="text-gray-light">{placeholder}</span>
        ) : (
          <span>{text}</span>
        )}
      </p>
    </button>
  );
};

export default DrawerSelector;
