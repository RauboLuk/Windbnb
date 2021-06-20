const Stays = ({ country, stays = 0 }) => {
  return (
    <section className="mt-9 flex justify-between font-montserrat items-center">
      <div className="text-gray-darkest text-lg font-bold md:text-2xl">
        Stays in {country}
      </div>
      <div className="text-gray-dark text-sm font-medium">
        {stays} {String(stays) === "1" ? "stay" : "stays"}
      </div>
    </section>
  );
};

export default Stays;
