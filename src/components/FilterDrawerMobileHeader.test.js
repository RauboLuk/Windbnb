import { render, screen, fireEvent } from "../test-utils";
import FilterDrawerMobileHeader from "./FilterDrawerMobileHeader";

describe("filter drawer mobile header", () => {
  test("there is a close button", () => {
    render(<FilterDrawerMobileHeader />);
    const btn = screen.queryByTestId("closeBtn");

    expect(btn).toBeInTheDocument();
  });
  test("when close button is pressed close modal function runs", () => {
    const closeModal = jest.fn();
    render(<FilterDrawerMobileHeader closeModal={closeModal} />);
    const btn = screen.getByTestId("closeBtn");

    fireEvent.click(btn);
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
  test("there is an edit text", () => {
    render(<FilterDrawerMobileHeader />);
    const text = screen.queryByText("Edit your search");

    expect(text).toBeInTheDocument();
  });
});
