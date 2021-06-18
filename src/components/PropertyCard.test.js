import { render, screen } from "@testing-library/react";
import PropertyCard from "./PropertyCard";

const location = {
  city: "Helsinki",
  country: "Finland",
  superHost: false,
  title: "Stylist apartment in center of the city",
  rating: 4.4,
  maxGuests: 3,
  type: "Entire apartment",
  beds: null,
  photo:
    "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
};

describe("Property card", () => {
  test("there is a picture", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.getByTestId("img");
    expect(propertyElement.prop("src")).toEqual(location.photo);
  });
  test("there is an alt to a picture", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.getByAltText(location.title);
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a super host badge", () => {
    render(<PropertyCard location={{ ...location, superHost: true }} />);
    const propertyElement = screen.getByText("Super host");
    expect(propertyElement).toBeInTheDocument();
  });
  test("there isn't a super host badge", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.queryByText("Super host");
    expect(propertyElement).not.toBeInTheDocument();
  });
  test("there is a title", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.queryByText(location.title);
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a rating", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.queryByText(location.rating);
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a star icon", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.getByTestId("starIcon");
    expect(propertyElement).toBeInTheDocument();
  });
  test("star icon is red", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.getByTestId("starIcon");
    expect(propertyElement).toHaveStyle("color: #EB5757");
  });
  test("there is a type", () => {
    render(<PropertyCard location={location} />);
    const propertyElement = screen.queryByText(location.type);
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a type with beds", () => {
    render(<PropertyCard location={{ location, beds: 2 }} />);
    const propertyElement = screen.queryByText(
      `${location.type} . ${location.beds} beds`
    );
    expect(propertyElement).toHaveStyle("color: #EB5757");
  });
  test("there is a correct plural for one bed", () => {
    render(<PropertyCard location={{ location, beds: 1 }} />);
    const propertyElement = screen.queryByText(
      `${location.type} . ${location.beds} bed`
    );
    expect(propertyElement).toHaveStyle("color: #EB5757");
  });
});
