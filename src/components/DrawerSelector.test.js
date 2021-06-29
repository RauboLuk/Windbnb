import { render, screen, fireEvent } from "../test-utils";
import DrawerSelector from "./DrawerSelector";

describe("drawer selector", () => {
  test("there is a placeholder text visible showPlaceholder={true}", () => {
    const openGuestsSelect = jest.fn();
    render(
      <DrawerSelector
        onClick={openGuestsSelect}
        label="guests"
        text="Text"
        placeholder="Placeholder"
        showPlaceholder={true}
      />
    );
    const selectElement = screen.queryByText("Placeholder");
    expect(selectElement).toBeVisible();
  });
  test("there isn't a placeholder text visible showPlaceholder={false}", () => {
    render(
      <DrawerSelector
        label="guests"
        text="Text"
        placeholder="Placeholder"
        showPlaceholder={false}
      />
    );
    const selectElement = screen.queryByText("Placeholder");
    expect(selectElement).not.toBeInTheDocument();
  });
  test("there is a text visible showPlaceholder={false}", () => {
    render(
      <DrawerSelector
        label="guests"
        text="Text"
        placeholder="Placeholder"
        showPlaceholder={false}
      />
    );
    const selectElement = screen.queryByText("Text");
    expect(selectElement).toBeVisible();
  });
  test("there isn't a text visible showPlaceholder={true}", () => {
    render(
      <DrawerSelector
        label="guests"
        text="Text"
        placeholder="Placeholder"
        showPlaceholder={true}
      />
    );
    const selectElement = screen.queryByText("Text");
    expect(selectElement).not.toBeInTheDocument();
  });
  test("when button is pressed onClick runs", () => {
    const onClick = jest.fn();
    render(
      <DrawerSelector
        onClick={onClick}
        label="guests"
        text="Text"
        placeholder="Placeholder"
        showPlaceholder={true}
      />
    );
    const btn = screen.getByRole("button");

    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
