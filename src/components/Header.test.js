import { render, screen, fireEvent } from "../test-utils";
import Header from "./Header";

const location = { country: "Finland", city: "Helsinki" };
const guests = { adults: 2, children: 1 };

describe("header", () => {
  test("there is a logo", () => {
    const handleClick = jest.fn();
    render(<Header setIsModalOpen={handleClick} />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });
  test("there is a search bar", () => {
    const handleClick = jest.fn();
    render(<Header setIsModalOpen={handleClick} />);
    const searchBarElement = screen.getByTestId("searchBar");
    expect(searchBarElement).toBeInTheDocument();
  });
  test("there is a search bar that contains selected location", () => {
    const handleClick = jest.fn();
    render(<Header setIsModalOpen={handleClick} />);
    const locationElement = screen.getByText(
      `${location.city}, ${location.country}`
    );
    expect(locationElement).toBeInTheDocument();
  });
  test("there is a search bar that contains guests placeholder if there are no guests", () => {
    const handleClick = jest.fn();
    render(<Header setIsModalOpen={handleClick} />);
    const guestsElement = screen.getByText("Add guests");
    expect(guestsElement).toBeInTheDocument();
  });
  test("there is a search bar that contains guests count", () => {
    const handleClick = jest.fn();
    render(<Header setIsModalOpen={handleClick} />);
    const guestsElement = screen.getByText("3 guests");
    expect(guestsElement).toBeInTheDocument();
  });
  test("there is a correct singular for guests count", () => {
    const handleClick = jest.fn();
    render(<Header setIsModalOpen={handleClick} />);
    const guestsElement = screen.getByText("1 guest");
    expect(guestsElement).toBeInTheDocument();
  });

  test("there is a search icon", () => {
    const handleClick = jest.fn();
    render(<Header setIsModalOpen={handleClick} />);
    const buttonElement = screen.getByTestId("searchIcon");
    expect(buttonElement).toBeInTheDocument();
  });
  test("calls setIsModalOpen prop when searchBar clicked", () => {
    const handleClick = jest.fn();
    render(<Header setIsModalOpen={handleClick} />);
    const buttonElement = screen.getByTestId("searchBar");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
