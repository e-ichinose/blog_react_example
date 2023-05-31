import type { Meta, StoryObj } from '@storybook/react';
import UserRegisterPage from './UserRegisterPage';

const meta = {
  title: 'Pages/UserRegisterPage',
  component: UserRegisterPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UserRegisterPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};

export const LoggedOut: Story = {};
