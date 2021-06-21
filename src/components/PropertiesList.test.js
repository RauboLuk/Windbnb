import { render, screen } from "@testing-library/react";
import PropertiesList from "./PropertiesList";
import locations from "../assets/data/stays.json";

describe("Properties list", () => {
  test("it renders properties based on the number of locations", () => {
    render(<PropertiesList properties={locations} />);
    const propertiesList = screen.getByTestId("propertiesList");
    expect(propertiesList.childNodes.length).toEqual(locations.length);
  });
});
