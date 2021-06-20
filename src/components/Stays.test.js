import { render, screen } from "@testing-library/react";
import Stays from "./Stays";

describe("Stays", () => {
  test("there is a info about country", () => {
    render(<Stays country="Finland" stays="1" />);
    const propertyElement = screen.getByText("Stays in Finland");
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a info about stays count", () => {
    render(<Stays country="Finland" stays="2" />);
    const propertyElement = screen.getByText("2 stays");
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a correct singular form for 1 stay", () => {
    render(<Stays country="Finland" stays="1" />);
    const propertyElement = screen.getByText("1 stay");
    expect(propertyElement).toBeInTheDocument();
  });
});
