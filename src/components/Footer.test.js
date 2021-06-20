import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("it renders correct text", () => {
    render(<Footer />);
    const devElement = screen.getByText("devChallenges.io");
    const textElement = screen.getByText((content, node) => {
      const hasText = (node) =>
        node.textContent === "created by &R - devChallenges.io";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });
    expect(devElement).toBeVisible();
    expect(textElement).toBeInTheDocument();
  });
});
