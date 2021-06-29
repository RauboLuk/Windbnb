import { render, screen } from "../test-utils";
import PropertiesList from "./PropertiesList";
import locations from "../assets/data/stays.json";

describe("Properties list", () => {
  test("it renders properties based on the number of locations", () => {
    render(<PropertiesList />);
    const propertiesList = screen.getByTestId("propertiesList");
    expect(propertiesList.childNodes.length).toEqual(locations.length);
  });
});
