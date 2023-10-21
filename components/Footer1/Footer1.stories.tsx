import type { Meta, StoryObj } from "@storybook/react";

import { Footer1 } from ".";

const meta: Meta<typeof Footer1> = {
  component: Footer1,
};

export default meta;
type Story = StoryObj<typeof Footer1>;

export const Main: Story = {
  args: {
    text: "&copy; 2020 Your Company, Inc. All rights reserved.",
    links: [
      { name: "Product", href: "/" },
      { name: "Features", href: "/" },
      { name: "Marketplace", href: "/" },
      { name: "Company", href: "/" },
    ],
    socialLinks: [
      {
        name: "Facebook",
        href: "/",
        src: "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        alt: "teste",
      },
      {
        name: "Twitter",
        href: "/",
        src: "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        alt: "teste",
      },
      {
        name: "GitHub",
        href: "/",
        src: "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        alt: "teste",
      },
      {
        name: "YouTube",
        href: "/",
        src: "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        alt: "teste",
      },
    ],
  },
  render: (args) => <Footer1 {...args} />,
};
