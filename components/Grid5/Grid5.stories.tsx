import type { Meta, StoryObj } from "@storybook/react";

import { Grid5 } from ".";

const meta: Meta<typeof Grid5> = {
  component: Grid5,
};

export default meta;
type Story = StoryObj<typeof Grid5>;

export const Main: Story = {
  args: {
    items: [
      {
        src: "https://shoppingdabola.com.br/wp-content/uploads/2023/06/RMCFMZ0127_01_7f8616a0-9006-4c4f-829a-c9ad552fa644_500x480-1.png",
        title: "LOJA",
        subtitle: "Confira nossa loja",
        href: "/",
        id: 1,
      },
      {
        src: "https://pbs.twimg.com/profile_images/1623036534160035872/5mXtSOFO_400x400.jpg",
        title: "TRYOUT",
        subtitle: "Faça parte",
        href: "/",
        id: 1,
      },
      {
        src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84177609-a4e1-4f59-9f91-9fd8a8e891f2/dbxgm2b-6027a167-1a55-4ce3-9de4-e4a4ea6340eb.png/v1/fill/w_1024,h_1664,q_80,strp/real_madrid_team_mobile_wallpaper_by_adik1910_dbxgm2b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY2NCIsInBhdGgiOiJcL2ZcLzg0MTc3NjA5LWE0ZTEtNGY1OS05ZjkxLTlmZDhhOGU4OTFmMlwvZGJ4Z20yYi02MDI3YTE2Ny0xYTU1LTRjZTMtOWRlNC1lNGE0ZWE2MzQwZWIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lUpVOOvRnsuZQcGrR1s_AieVNf7Nhg38iSQhpTSs8IQ",
        title: "TIME",
        subtitle: "Conheça o",
        href: "/",
        id: 1,
      },
    ],
  },
  render: (args) => <Grid5 {...args} />,
};
