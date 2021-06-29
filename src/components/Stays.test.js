import { render, screen } from "../test-utils";

import Stays from "./Stays";

describe("Stays", () => {
  test("there is a info about country", () => {
    render(<Stays />);
    const propertyElement = screen.getByText("Stays in Finland");
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a info about stays count", () => {
    render(<Stays />);
    const propertyElement = screen.getByText("2 stays");
    expect(propertyElement).toBeInTheDocument();
  });
  test("there is a correct singular form for 1 stay", () => {
    render(<Stays />);
    const propertyElement = screen.getByText("1 stay");
    expect(propertyElement).toBeInTheDocument();
  });
});
