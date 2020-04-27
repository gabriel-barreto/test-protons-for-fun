module.exports = {
  addons: [
    // ==> Presets
    '@storybook/preset-create-react-app',

    // ==> Addons
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  stories: ['../src/**/*.stories.(js|mdx)'],
};
