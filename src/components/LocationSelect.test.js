import { render, screen } from "../test-utils";
import LocationSelect from "./LocationSelect";

const stays = [
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
    render(<LocationSelect />, {
      preloadedState: {
        stays,
      },
    });
    const selectElement = screen.queryByText(
      `${stays[0].city}, ${stays[0].country}`
    );
    expect(selectElement).toBeInTheDocument();
  });
  test("there can be more than one location", () => {
    render(<LocationSelect />, {
      preloadedState: {
        stays,
      },
    });
    const select1Element = screen.queryByText(
      `${stays[0].city}, ${stays[0].country}`
    );
    expect(select1Element).toBeInTheDocument();
    const select2Element = screen.queryByText(
      `${stays[1].city}, ${stays[1].country}`
    );
    expect(select2Element).toBeInTheDocument();
  });
  test("there is a location icon", () => {
    render(<LocationSelect />, {
      preloadedState: {
        stays,
      },
    });
    const selectElement = screen.queryAllByTestId("locationIcon");
    expect(selectElement[0]).toBeInTheDocument();
  });
});
