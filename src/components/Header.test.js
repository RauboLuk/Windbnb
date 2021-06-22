import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

const location = { country: "Finland", city: "Helsinki" };
const guests = { adults: 2, children: 1 };

describe("header", () => {
  test("there is a logo", () => {
    render(<Header selectedLocation={location} guests={guests} />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });
  test("there is a search bar", () => {
    render(<Header selectedLocation={location} guests={guests} />);
    const searchBarElement = screen.getByTestId("searchBar");
    expect(searchBarElement).toBeInTheDocument();
  });
  test("there is a search bar that contains selected location", () => {
    render(<Header selectedLocation={location} guests={guests} />);
    const locationElement = screen.getByText(
      `${location.city}, ${location.country}`
    );
    expect(locationElement).toBeInTheDocument();
  });
  test("there is a search bar that contains guests placeholder if there are no guests", () => {
    render(<Header selectedLocation={location} />);
    const guestsElement = screen.getByText("Add guests");
    expect(guestsElement).toBeInTheDocument();
  });
  test("there is a search bar that contains guests count", () => {
    render(<Header selectedLocation={location} guests={guests} />);
    const guestsElement = screen.getByText("3 guests");
    expect(guestsElement).toBeInTheDocument();
  });
  test("there is a correct singular for guests count", () => {
    render(
      <Header selectedLocation={location} guests={{ adults: 0, children: 1 }} />
    );
    const guestsElement = screen.getByText("1 guest");
    expect(guestsElement).toBeInTheDocument();
  });

  test("there is a search icon", () => {
    render(<Header selectedLocation={location} guests={guests} />);
    const buttonElement = screen.getByTestId("searchIcon");
    expect(buttonElement).toBeInTheDocument();
  });
  test("calls setIsModalOpen prop when searchBar clicked", () => {
    const handleClick = jest.fn();
    render(
      <Header
        setIsModalOpen={handleClick}
        selectedLocation={location}
        guests={guests}
      />
    );
    const buttonElement = screen.getByTestId("searchBar");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
