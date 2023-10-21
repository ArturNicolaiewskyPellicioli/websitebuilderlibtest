import type { Meta, StoryObj } from "@storybook/react";

import { Grid3 } from ".";

const meta: Meta<typeof Grid3> = {
  component: Grid3,
};

export default meta;
type Story = StoryObj<typeof Grid3>;

export const Main: Story = {
  args: {
    title: "Calendário de jogos",
    searchType: "text",
    searchPlaceholder: "Pesquisar",
    searchAutoComplete: "off",
    items: [
      {
        id: 1,
        date: "03/32/23 - 17:00",
        homeTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        awayTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        homeTeamScore: "14",
        awayTeamScore: "7",
        homeTeamName: "Patriots",
        awayTeamName: "Eagles",
        locationName: "Estádio do Morumbi",
        locationAddress: "Prç. do Morumbi, São Paulo - SP, 05653-070",
      },
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
        href1: "/",
        href2: "/",
        href1Text: "Calendário",
        href2Text: "Ingressos",
      },
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
        href1: "/",
        href2: "/",
        href1Text: "Calendário",
        href2Text: "Ingressos",
      },
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
        href1: "/",
        href2: "/",
        href1Text: "Calendário",
        href2Text: "Ingressos",
      },
      {
        id: 1,
        date: "03/32/23 - 17:00",
        homeTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        awayTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        homeTeamScore: "14",
        awayTeamScore: "7",
        homeTeamName: "Patriots",
        awayTeamName: "Eagles",
        locationName: "Estádio do Morumbi",
        locationAddress: "Prç. do Morumbi, São Paulo - SP, 05653-070",
      },
      {
        id: 1,
        date: "03/32/23 - 17:00",
        homeTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        awayTeamSrc:
          "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg",
        homeTeamScore: "14",
        awayTeamScore: "7",
        homeTeamName: "Patriots",
        awayTeamName: "Eagles",
        locationName: "Estádio do Morumbi",
        locationAddress: "Prç. do Morumbi, São Paulo - SP, 05653-070",
      },
    ],
  },
  render: (args) => <Grid3 {...args} />,
};
