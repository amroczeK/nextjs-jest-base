import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders the page without crashing", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("displays the main heading content", () => {
    render(<Home />);

    // Check for the main instruction text
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});
