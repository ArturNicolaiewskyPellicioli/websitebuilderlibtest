import type { Meta, StoryObj } from "@storybook/react";

import { Grid2 } from ".";

const meta: Meta<typeof Grid2> = {
  component: Grid2,
};

export default meta;
type Story = StoryObj<typeof Grid2>;

export const Main: Story = {
  args: {
    title: "teste de props",
    subtitle: "teste de props",
    items: [
      {
        id: 1,
        title: "Boost your conversion rate",
        href: "/",
        description:
          "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        src: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Marketing", href: "/" },
        author: {
          name: "Michael Foster",
          role: "Co-Founder / CTO",
          href: "/",
          src: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  },
  render: (args) => <Grid2 {...args} />,
};