import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';

const meta = {
  title: 'UI/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  // args: {
  //   children: <div>children</div>,
  // },
};

export const LoggedOut: Story = {
  // args: {
  //   children: <div>children</div>,
  // },
};
