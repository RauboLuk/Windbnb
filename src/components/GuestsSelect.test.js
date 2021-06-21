import { render, screen } from "@testing-library/react";
import GuestsSelect from "./GuestsSelect";

describe("Guests select", () => {
  test("there is an adult text", () => {
    render(<GuestsSelect />);
    const selectElement = screen.queryByText("Adults");
    expect(selectElement).toBeInTheDocument();
  });
  test("there is an adult info text", () => {
    render(<GuestsSelect />);
    const selectElement = screen.queryByText("Ages 13 or above");
    expect(selectElement).toBeInTheDocument();
  });
  test("there is an children text", () => {
    render(<GuestsSelect />);
    const selectElement = screen.queryByText("Children");
    expect(selectElement).toBeInTheDocument();
  });
  test("there is an children info text", () => {
    render(<GuestsSelect />);
    const selectElement = screen.queryByText("Ages 2-12");
    expect(selectElement).toBeInTheDocument();
  });
  test("there are two add buttons", () => {
    render(<GuestsSelect />);
    const selectElement = screen.queryAllByTestId("addBtn");
    expect(selectElement.length).toEqual(2);
  });
  test("there are two minus buttons", () => {
    render(<GuestsSelect />);
    const selectElement = screen.queryAllByTestId("minusBtn");
    expect(selectElement.length).toEqual(2);
    expect(selectElement[0]).toBeInTheDocument();
    expect(selectElement[1]).toBeInTheDocument();
  });
});
