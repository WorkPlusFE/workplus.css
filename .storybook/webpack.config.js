const path = require('path');

const modulesPath = path.resolve(__dirname, '../modules')

module.exports = (config, env) => {

  if (env === 'PRODUCTION') {
    config.plugins = config.plugins
      .filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
  }

  const rules = config.module.rules

  rules.forEach((rule, index) => {
    if ('README.md'.match(rule.test)) {
      // console.warn('replacing MD rule:', rule)
      rules.splice(index, 1, {
        test: /\.md$/,
        loader: 'raw-loader',
      })
    }
  });

  rules.push(
    {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: require.resolve('./postcss.config.js'),
            },
          },
        },
      ],
      include: modulesPath,
    },
    {
      test: /\.jsx?$/,
      loaders: [ require.resolve('@storybook/addon-storysource/loader') ],
      enforce: 'pre',
    },
  );

  return config;
};
