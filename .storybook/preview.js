import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { addons } from '@storybook/addons';

addDecorator((storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>);
addons.setConfig({
  options: {
    enableShortcuts: false,
    isFullScreen: true,
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
