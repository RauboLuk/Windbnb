import { fireEvent, render, screen } from "../test-utils";
import FilterDrawer from "./FilterDrawer";

describe("filter drawer", () => {
  test("is hidden", () => {
    render(<FilterDrawer isModalOpen={false} />);
    const drawerElement = screen.queryByTestId("drawer");
    expect(drawerElement).not.toBeInTheDocument();
  });
  test("is visible", () => {
    render(<FilterDrawer isModalOpen={true} />);
    const drawerElement = screen.getByTestId("drawer");
    expect(drawerElement).toBeVisible();
  });
  test("it renders location selector", () => {
    render(<FilterDrawer isModalOpen={true} />);
    const drawerElement = screen.getByTestId("locationSelector");
    expect(drawerElement).toBeVisible();
  });
  test("if location selector is pressed it renders location select", () => {
    render(<FilterDrawer isModalOpen={true} />);
    const drawerElement = screen.getByTestId("locationSelector");
    fireEvent.click(drawerElement);
    const locationSelect = screen.getByTestId("locationSelect");
    expect(locationSelect).toBeVisible();
  });
  test("it renders guests selector", () => {
    render(<FilterDrawer isModalOpen={true} />);
    const drawerElement = screen.getByTestId("guestsSelector");
    expect(drawerElement).toBeVisible();
  });
  test("if guests selector is pressed it renders guests select", () => {
    render(<FilterDrawer isModalOpen={true} />);
    const drawerElement = screen.getByTestId("guestsSelector");
    fireEvent.click(drawerElement);
    const guestsSelect = screen.getByTestId("guestsSelect");
    expect(guestsSelect).toBeVisible();
  });
  test("it renders filter drawer mobile header", () => {
    render(<FilterDrawer isModalOpen={true} />);
    const drawerElement = screen.getByText("Edit your search");
    expect(drawerElement).toBeVisible();
  });
  test("there is a search button", () => {
    render(<FilterDrawer isModalOpen={true} />);
    const drawerElement = screen.getAllByTestId("searchBtn");
    expect(drawerElement[0]).toBeVisible();
  });
});
