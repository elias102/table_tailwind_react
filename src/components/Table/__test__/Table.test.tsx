import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Table from "../Table";

describe("Table component", () => {
  it("Table should render correctly", () => {
    const headerCellList = ["ID", "FirstName", "LastName"];
    const dataCellList = [
      { id: 1, firstName: "elias", lastName: "sharafi" },
      { id: 2, firstName: "sadra", lastName: "sharafi" },
      { id: 3, firstName: "hermes", lastName: "sharafi" },
    ];
    render(
      <Table headerCellList={headerCellList} dataCellList={dataCellList} />,
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
