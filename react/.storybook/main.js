module.exports = {
  addons: [
    '@storybook/addon-essentials'
  ],
  stories: [
    '../stories/**/*.stories.jsx'
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    })

    return config
  }
}
