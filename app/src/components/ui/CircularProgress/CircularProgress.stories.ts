import type { Meta, StoryObj } from '@storybook/react';
import CenteredCircularProgress from './CenteredCircularProgress';

const meta = {
  title: 'UI/CircularProgress',
  component: CenteredCircularProgress,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CenteredCircularProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Centered: Story = {};
