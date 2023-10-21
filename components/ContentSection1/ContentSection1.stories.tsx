import type { Meta, StoryObj } from "@storybook/react";

import { ContentSection1 } from ".";

const meta: Meta<typeof ContentSection1> = {
  component: ContentSection1,
};

export default meta;
type Story = StoryObj<typeof ContentSection1>;

export const Main: Story = {
  args: {
    title: "Our people",
    subtitle:
      "Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.",
    texts: [
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.",
    ],
    src1: "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
    alt1: "Tuple",
    src2: "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
    alt2: "Tuple",
    src3: "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
    alt3: "Tuple",
    src4: "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
    alt4: "Tuple",
  },
  render: (args) => <ContentSection1 {...args} />,
};
