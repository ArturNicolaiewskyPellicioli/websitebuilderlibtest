import type { Meta, StoryObj } from "@storybook/react";

import { ContentSection2 } from ".";

const meta: Meta<typeof ContentSection2> = {
  component: ContentSection2,
};

export default meta;
type Story = StoryObj<typeof ContentSection2>;

export const Main: Story = {
  args: {
    tag: "introduction",
    title: "Lorem ipsum dolor sit",
  },
  render: (args) => <ContentSection2 {...args} />,
};
