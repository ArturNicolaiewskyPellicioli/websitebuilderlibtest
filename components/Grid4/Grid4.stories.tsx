import type { Meta, StoryObj } from "@storybook/react";

import { Grid4 } from ".";

const meta: Meta<typeof Grid4> = {
  component: Grid4,
};

export default meta;
type Story = StoryObj<typeof Grid4>;

export const Main: Story = {
  args: {
    title: "PATROCINADORES",
    items: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/934px-Logo_of_Twitter.svg.png",
        alt: "Tuple",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg",
        alt: "Tuple",
      },
      {
        src: "https://blog.hubspot.com/hubfs/image8-2.jpg",
        alt: "Tuple",
      },
      {
        src: "https://cdn.icon-icons.com/icons2/3398/PNG/512/apple_logo_icon_214672.png",
        alt: "Tuple",
      },
      {
        src: "https://1000logos.net/wp-content/uploads/2017/05/Pepsi-logo.png",
        alt: "Tuple",
      },
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/nissan-brand-logo-1200x938-1594842787.jpg",
        alt: "Tuple",
      },
    ],
  },
  render: (args) => <Grid4 {...args} />,
};
