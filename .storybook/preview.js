import '../src/index.css';
// register msw addon
import { initialize,mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

// Provide the MSW addon decorators globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
