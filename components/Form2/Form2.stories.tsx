import type { Meta, StoryObj } from "@storybook/react";

import { Form2 } from ".";

const meta: Meta<typeof Form2> = {
  component: Form2,
};

export default meta;
type Story = StoryObj<typeof Form2>;

export const Main: Story = {
  args: {
    title: "Sign up for our newsletter",
    subtitle: "Stay in the loop with everything you need to know.",
    inputName: "email",
    inputPlaceholder: "Enter your email",
    submitText: "Subscribe",
    inputDescription: "We care about your data in our privacy policy.",
  },
  render: (args) => <Form2 {...args} />,
};
