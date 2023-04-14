import type { Meta, StoryObj } from '@storybook/react';

import Button from '~/components/buttons/Button';

const meta: Meta<typeof Button> = { title: 'Button', component: Button };
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export const Primary: Story = {
  render: (args) => <Button {...args} />,
  args: {
    label: 'Primary',
    bg: '700',
  },
};
