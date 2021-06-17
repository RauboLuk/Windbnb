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
  test("there is a search bar with box shadow", () => {
    render(<Header />);
    const searchBarElement = screen.getByTestId("searchBar");
    expect(searchBarElement).toHaveStyle(
      "box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1)"
    );
  });
  test("there is a search icon", () => {
    render(<Header />);
    const buttonElement = screen.getByTestId("searchIcon");
    expect(buttonElement).toBeInTheDocument();
  });
  test("search icon is red", () => {
    render(<Header />);
    const buttonElement = screen.getByTestId("searchIcon");
    expect(buttonElement).toHaveStyle("color: #EB5757");
  });
  test("calls openSearch prop when searchBar clicked", () => {
    const handleClick = jest.fn();
    render(<Header openSearch={handleClick} />);
    const buttonElement = screen.getByTestId("searchBar");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
