import { render, screen, fireEvent } from "@testing-library/react";
import FilterDrawer from "./FilterDrawer";

const location = { country: "Finland", city: "Helsinki" };

describe("filter drawer", () => {
  test("is hidden", () => {
    const setGuests = jest.fn();
    render(
      <FilterDrawer
        isModalOpen={false}
        selectedLocation={location}
        setGuests={setGuests}
      />
    );
    const drawerElement = screen.queryByTestId("drawer");
    expect(drawerElement).not.toBeInTheDocument();
  });
  test("is visible", () => {
    const setGuests = jest.fn();
    render(
      <FilterDrawer
        isModalOpen={true}
        selectedLocation={location}
        setGuests={setGuests}
      />
    );
    const drawerElement = screen.getByTestId("drawer");
    expect(drawerElement).toBeVisible();
  });
  test("there is a location label", () => {
    const setGuests = jest.fn();
    render(
      <FilterDrawer
        isModalOpen={true}
        selectedLocation={location}
        setGuests={setGuests}
      />
    );
    const drawerElement = screen.getByText("location");
    expect(drawerElement).toBeVisible();
  });
  test("there is a guests label", () => {
    const setGuests = jest.fn();
    render(
      <FilterDrawer
        isModalOpen={true}
        selectedLocation={location}
        setGuests={setGuests}
      />
    );
    const drawerElement = screen.getByText("guests");
    expect(drawerElement).toBeVisible();
  });
  test("there is a search button", () => {
    const setGuests = jest.fn();
    render(
      <FilterDrawer
        isModalOpen={true}
        selectedLocation={location}
        setGuests={setGuests}
      />
    );
    const drawerElement = screen.getAllByTestId("searchBtn");
    expect(drawerElement[0]).toBeVisible();
  });
  test("there is a close icon", () => {
    const setGuests = jest.fn();
    render(
      <FilterDrawer
        isModalOpen={true}
        selectedLocation={location}
        setGuests={setGuests}
      />
    );
    const drawerElement = screen.getByTestId("closeIcon");
    expect(drawerElement).toBeVisible();
  });
  test("there is a close button", () => {
    const setGuests = jest.fn();
    render(
      <FilterDrawer
        isModalOpen={true}
        selectedLocation={location}
        setGuests={setGuests}
      />
    );
    const drawerElement = screen.getByTestId("closeBtn");
    expect(drawerElement).toBeVisible();
  });
  test("there is a current location", () => {
    const setGuests = jest.fn();
    render(
      <FilterDrawer
        isModalOpen={true}
        selectedLocation={location}
        setGuests={setGuests}
      />
    );
    const drawerElement = screen.getByTestId("currentLocation");
    expect(drawerElement).toHaveTextContent("Helsinki, Finland");
  });
});
