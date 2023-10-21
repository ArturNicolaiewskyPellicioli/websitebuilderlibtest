import type { Meta, StoryObj } from "@storybook/react";

import { Carousel1 } from ".";

const meta: Meta<typeof Carousel1> = {
  component: Carousel1,
};

export default meta;
type Story = StoryObj<typeof Carousel1>;

export const Main: Story = {
  args: {
    title: "Jogos",
    slides: [
      {
        id: 1,
        date: "03/32/23 - 17:00",
        homeTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        awayTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        homeTeamName: "Patriots",
        awayTeamName: "Eagles",
        locationName: "Estádio do Morumbi",
        locationAddress: "Prç. do Morumbi, São Paulo - SP, 05653-070",
      },
      {
        id: 1,
        date: "03/32/23 - 18:00",
        homeTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        awayTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        homeTeamName: "Patriots",
        awayTeamName: "Eagles",
        locationName: "Estádio do Morumbi",
        locationAddress: "Prç. do Morumbi, São Paulo - SP, 05653-070",
      },
      {
        id: 1,
        date: "03/32/23 - 19:00",
        homeTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        awayTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        homeTeamName: "Patriots",
        awayTeamName: "Eagles",
        locationName: "Estádio do Morumbi",
        locationAddress: "Prç. do Morumbi, São Paulo - SP, 05653-070",
      },
      {
        id: 1,
        date: "03/32/23 - 20:00",
        homeTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        awayTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        homeTeamName: "Patriots",
        awayTeamName: "Eagles",
        locationName: "Estádio do Morumbi",
        locationAddress: "Prç. do Morumbi, São Paulo - SP, 05653-070",
      },
      {
        id: 1,
        date: "03/32/23 - 21:00",
        homeTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        awayTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        homeTeamName: "Patriots",
        awayTeamName: "Eagles",
        locationName: "Estádio do Morumbi",
        locationAddress: "Prç. do Morumbi, São Paulo - SP, 05653-070",
      },
      {
        id: 1,
        date: "03/32/23 - 22:00",
        homeTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        awayTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        homeTeamName: "Patriots",
        awayTeamName: "Eagles",
        locationName: "Estádio do Morumbi",
        locationAddress: "Prç. do Morumbi, São Paulo - SP, 05653-070",
      },
    ],
  },
  render: (args) => <Carousel1 {...args} />,
};
