import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config: any) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
    };
    return config;
  },
  staticDirs: ['../public'],
};
export default config;
