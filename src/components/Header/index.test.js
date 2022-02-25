import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";

// useHref() may be used only in the context of a <Router> component.

describe("Header", () => {
  it("should display text", () => {
    render(<Header />);
    const container = screen.getByText("Simple");
    expect(container).toBeInTheDocument();
  });
});
