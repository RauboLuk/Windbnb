import { render, screen } from "../test-utils";

import Stays from "./Stays";

const location = { city: "xd", country: "tes" };

describe("Stays", () => {
  test("there is a info about country", () => {
    render(<Stays />, {
      preloadedState: {
        location,
      },
    });
    const propertyElement = screen.getByText(`Stays in ${location.country}`);
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a info about stays count", () => {
    render(<Stays />, {
      preloadedState: {
        stays: [location, location],
      },
    });
    const propertyElement = screen.getByText("2 stays");
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a correct singular form for 1 stay", () => {
    render(<Stays />, {
      preloadedState: {
        stays: [location],
      },
    });
    const propertyElement = screen.getByText("1 stay");
    expect(propertyElement).toBeInTheDocument();
  });
});
