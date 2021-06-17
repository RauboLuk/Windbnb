import Logo from "../assets/images/logo.svg";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({ openSearch }) => {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <section
        onClick={openSearch}
        data-testid="searchBar"
        style={{
          boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input type="text" placeholder="Choose location" />
        <SearchIcon
          style={{
            color: "#EB5757",
          }}
          data-testid="searchIcon"
        />
        <input type="text" placeholder="Add guests" />
      </section>
    </header>
  );
};

export default Header;
