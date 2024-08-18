import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import Actions from "./Actions";
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Table",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    headerCellList: ["id", "FirstName", "LastName", "Actions"],
    dataCellList: [
      {
        id: "1",
        firstName: "elias",
        lastName: "sharafi",
        actions: <Actions />,
      },
      {
        id: "2",
        firstName: "sadra",
        lastName: "sharafi",
        actions: <Actions />,
      },
      {
        id: "3",
        firstName: "hermes",
        lastName: "sharafi",
        actions: <Actions />,
      },
    ],
    shadowColorHeader: "#0875921F",
    checkboxBorderColor: "border-tahiti",
    textDataCellColor: "text-tahiti",
  },
};
export const Secondary: Story = {
  args: {
    headerCellList: ["ID", "FirstName", "LastName", "Actions"],
    dataCellList: [
      {
        id: "1",
        firstName: "elias",
        lastName: "sharafi",
        actions: <Actions />,
      },
      {
        id: "2",
        firstName: "sadra",
        lastName: "sharafi",
        actions: <Actions />,
      },
      {
        id: "3",
        firstName: "hermes",
        lastName: "sharafi",
        actions: <Actions />,
      },
    ],
    shadowColorHeader: "#0875921F",
    checkboxBorderColor: "border-blue-400",
  },
};
