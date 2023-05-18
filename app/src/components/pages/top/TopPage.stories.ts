import type { Meta, StoryObj } from '@storybook/react';
import Top from './TopPage';

const meta = {
  title: 'Pages/TopPage',
  component: Top,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Top>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};

export const LoggedOut: Story = {};
