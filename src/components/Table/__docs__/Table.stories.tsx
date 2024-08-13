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
    text: "Table",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Table"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Table",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Table"),
  },
};
