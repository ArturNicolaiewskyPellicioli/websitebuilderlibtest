import type { Meta, StoryObj } from "@storybook/react";

import { Countdown1 } from ".";

const meta: Meta<typeof Countdown1> = {
  component: Countdown1,
};

export default meta;
type Story = StoryObj<typeof Countdown1>;

export const Main: Story = {
  args: {
    homeTeamSrc:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    awayTeamSrc:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    homeTeamName: "Nebula",
    awayTeamName: "Sporter",
    initialTime: "11:10:00",
    description: "Partida começa em:",
  },
  render: (args) => <Countdown1 {...args} />,
};
