const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = (config) => {
  config.plugins.push(
    new NextFederationPlugin({
      name: 'create',
      library: { type: 'var', name: 'create' },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {
        view: 'view@http://localhost:3001/_next/static/runtime/remoteEntry.js',
        single:
          'single@http://localhost:3002/_next/static/runtime/remoteEntry.js',
      },
      exposes: {
        './Card': './src/components/Card.tsx',
      },
      shared: {},
    })
  );

  return config;
};
