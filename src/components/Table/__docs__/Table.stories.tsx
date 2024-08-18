import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Table",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    headerCellList: ["id", "FirstName", "LastName"],
    dataCellList: [
      { id: "1", firstName: "elias", lastName: "sharafi" },
      { id: "2", firstName: "sadra", lastName: "sharafi" },
      { id: "3", firstName: "hermes", lastName: "sharafi" },
    ],
    shadowColorHeader: "#0875921F",
    checkboxBorderColor: "border-tahiti",
  },
};
export const Secondary: Story = {
  args: {
    headerCellList: ["ID", "FirstName", "LastName"],
    dataCellList: [
      { id: "1", firstName: "elias", lastName: "sharafi" },
      { id: "2", firstName: "sadra", lastName: "sharafi" },
      { id: "3", firstName: "hermes", lastName: "sharafi" },
    ],
    shadowColorHeader: "#0875921F",
    checkboxBorderColor: "border-blue-400",
  },
};
