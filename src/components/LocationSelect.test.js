import { render, screen } from "@testing-library/react";
import LocationSelect from "./LocationSelect";

const locations = [
  {
    city: "Helsinki",
    country: "Finland",
  },
  {
    city: "Turku",
    country: "Finland",
  },
];

describe("Locations select", () => {
  test("there is a location name", () => {
    render(<LocationSelect locations={locations} />);
    const selectElement = screen.queryByText(
      `${locations[0].city}, ${locations[0].country}`
    );
    expect(selectElement).toBeInTheDocument();
  });
  test("there can be more than one location", () => {
    render(<LocationSelect locations={locations} />);
    const select1Element = screen.queryByText(
      `${locations[0].city}, ${locations[0].country}`
    );
    expect(select1Element).toBeInTheDocument();
    const select2Element = screen.queryByText(
      `${locations[1].city}, ${locations[1].country}`
    );
    expect(select2Element).toBeInTheDocument();
  });
  test("there is a location icon", () => {
    render(<LocationSelect locations={locations} />);
    const selectElement = screen.queryAllByTestId("locationIcon");
    expect(selectElement[0]).toBeInTheDocument();
  });
});
