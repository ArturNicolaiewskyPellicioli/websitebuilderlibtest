import type { Meta, StoryObj } from "@storybook/react";

import { Carousel2 } from ".";

const meta: Meta<typeof Carousel2> = {
  component: Carousel2,
};

export default meta;
type Story = StoryObj<typeof Carousel2>;

export const Main: Story = {
  args: {
    carouselSlides: [
      {
        id: 1,
        imageUrl:
          "https://shoppingdabola.com.br/wp-content/uploads/2023/06/RMCFMZ0127_01_7f8616a0-9006-4c4f-829a-c9ad552fa644_500x480-1.png",
        title: "TRYOUT 2023",
        subtitle: "Tryout for the team today!",
      },
      {
        id: 2,
        imageUrl:
          "https://pbs.twimg.com/profile_images/1623036534160035872/5mXtSOFO_400x400.jpg",
        title: "TRYOUT 2023",
        subtitle: "Tryout for the team today!",
      },
      {
        id: 3,
        imageUrl:
          "https://shoppingdabola.com.br/wp-content/uploads/2023/06/RMCFMZ0127_01_7f8616a0-9006-4c4f-829a-c9ad552fa644_500x480-1.png",
        title: "TRYOUT 2023",
        subtitle: "Tryout for the team today!",
      },
    ],
  },
  render: (args) => <Carousel2 {...args} />,
};
