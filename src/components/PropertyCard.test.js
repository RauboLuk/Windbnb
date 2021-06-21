import { render, screen } from "@testing-library/react";
import PropertyCard from "./PropertyCard";
import locations from "../assets/data/stays.json";

const location = { ...locations[0], beds: null };

describe("Property card", () => {
  test("there is a picture", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.getByTestId("img");
    expect(propertyElement).toHaveAttribute("src", location.photo);
  });
  test("there is an alt to a picture", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.getByAltText(location.title);
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a super host badge", () => {
    render(<PropertyCard location={{ ...location, superHost: true }} />);
    const propertyElement = screen.getByText("SUPER HOST");
    expect(propertyElement).toBeInTheDocument();
  });
  test("there isn't a super host badge", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.queryByTestId("superHost");
    expect(propertyElement).not.toBeInTheDocument();
  });
  test("there is a title", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.getByText(location.title);
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a rating", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.getByText(location.rating);
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a star icon", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.getByTestId("starIcon");
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a type", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.getByText(location.type);
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a type with beds", () => {
    render(<PropertyCard location={{ ...location, beds: 2 }} />);
    const propertyElement = screen.getByText(`${location.type} . 2 beds`);
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a correct plural for one bed", () => {
    render(<PropertyCard location={{ ...location, beds: 1 }} />);
    const propertyElement = screen.getByText(`${location.type} . 1 bed`);
    expect(propertyElement).toBeInTheDocument();
  });
});
