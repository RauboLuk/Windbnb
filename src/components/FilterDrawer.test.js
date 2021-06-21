import { render, screen, fireEvent } from "@testing-library/react";
import FilterDrawer from "./FilterDrawer";

const location = { country: "Finland", city: "Helsinki" };

describe("filter drawer", () => {
  test("is hidden", () => {
    render(<FilterDrawer isModalOpen={false} location={location} />);
    const drawerElement = screen.queryByTestId("drawer");
    expect(drawerElement).not.toBeInTheDocument();
  });
  test("is visible", () => {
    render(<FilterDrawer isModalOpen={true} location={location} />);
    const drawerElement = screen.getByTestId("drawer");
    expect(drawerElement).toBeVisible();
  });
  test("there is a location label", () => {
    render(<FilterDrawer isModalOpen={true} location={location} />);
    const drawerElement = screen.getByText("location");
    expect(drawerElement).toBeVisible();
  });
  test("there is a guests label", () => {
    render(<FilterDrawer isModalOpen={true} location={location} />);
    const drawerElement = screen.getByText("guests");
    expect(drawerElement).toBeVisible();
  });
  test("there is a search button", () => {
    render(<FilterDrawer isModalOpen={true} location={location} />);
    const drawerElement = screen.getByTestId("searchBtn");
    expect(drawerElement).toBeVisible();
  });
  test("there is a close icon", () => {
    render(<FilterDrawer isModalOpen={true} location={location} />);
    const drawerElement = screen.getByTestId("closeIcon");
    expect(drawerElement).toBeVisible();
  });
  test("there is a close button", () => {
    render(<FilterDrawer isModalOpen={true} location={location} />);
    const drawerElement = screen.getByTestId("closeBtn");
    expect(drawerElement).toBeVisible();
  });
  test("there is a current location", () => {
    render(<FilterDrawer isModalOpen={true} location={location} />);
    const drawerElement = screen.getByTestId("currentLocation");
    expect(drawerElement).toHaveTextContent("Helsinki, Finland");
  });
});
