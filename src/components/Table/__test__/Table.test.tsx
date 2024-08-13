import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Table from "../Table";

describe("Table component", () => {
  it("Table should render correctly", () => {
    render(<Table />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
