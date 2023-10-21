import type { Meta, StoryObj } from "@storybook/react";

import { Form1 } from ".";

const meta: Meta<typeof Form1> = {
  component: Form1,
};

export default meta;
type Story = StoryObj<typeof Form1>;

export const Main: Story = {
  args: {
    title: "TRYOUT 2023",
    description:
      "Tryout for the team today!Tryout for the team today!Tryout for the team today!Tryout for the team today!Tryout for the team today!Tryout for the team today!Tryout for the team today!Tryout for the team today!Tryout for the team today!",
    halfLineInputs: [
      {
        label: "Name",
        type: "text",
        autoComplete: "off",
        placeholder: "First name",
      },
      {
        label: "Last label",
        type: "text",
        autoComplete: "off",
        placeholder: "Last name",
      },
      {
        label: "Phone",
        type: "number",
        autoComplete: "off",
        placeholder: "(xx) xxxxx-xxxx",
      },
      {
        label: "Last label",
        type: "text",
        autoComplete: "off",
        placeholder: "Last name",
      },
    ],
    fullLineInputs: [
      {
        label: "Email",
        type: "email",
        autoComplete: "off",
        placeholder: "First name",
      },
      {
        label: "Company",
        type: "text",
        autoComplete: "off",
        placeholder: "Last name",
      },
    ],
    textareaInputs: [
      { label: "Company", placeholder: "Company", defaultValue: "" },
    ],
    switchText: "I agree to the terms and privacy.",
    switchLinkText: "Terms and privacy",
    switchHref: "/",
    submitButtonText: "Send",
  },
  render: (args) => <Form1 {...args} />,
};
