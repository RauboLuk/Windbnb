import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("header", () => {
  test("there is a logo", () => {
    render(<Header />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });
  test("there is a search bar", () => {
    render(<Header />);
    const searchBarElement = screen.getByTestId("searchBar");
    expect(searchBarElement).toBeInTheDocument();
    const guestsElement = screen.getByPlaceholderText("Add guests");
    expect(guestsElement).toBeInTheDocument();
    const locationElement = screen.getByPlaceholderText("Choose location");
    expect(locationElement).toBeInTheDocument();
  });
  test("there is a search icon", () => {
    render(<Header />);
    const buttonElement = screen.getByTestId("searchIcon");
    expect(buttonElement).toBeInTheDocument();
  });
  test("calls openDrawer prop when searchBar clicked", () => {
    const handleClick = jest.fn();
    render(<Header openDrawer={handleClick} />);
    const buttonElement = screen.getByTestId("searchBar");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
