import type { Meta, StoryObj } from "@storybook/react";

import { Navbar1 } from ".";

const meta: Meta<typeof Navbar1> = {
  component: Navbar1,
};

export default meta;
type Story = StoryObj<typeof Navbar1>;

export const Main: Story = {
  args: {
    companyName: "Workflow",
    companyLogo:
      "https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600",
    links: [
      { name: "Product", href: "/" },
      { name: "Features", href: "/" },
      { name: "Marketplace", href: "/" },
      { name: "Company", href: "/" },
    ],
    mainLink: { name: "Log in", href: "/" },
  },
  render: (args) => <Navbar1 {...args} />,
};
