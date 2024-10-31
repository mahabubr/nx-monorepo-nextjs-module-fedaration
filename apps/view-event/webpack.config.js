const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = (config) => {
  config.plugins.push(
    new NextFederationPlugin({
      name: 'view',
      library: { type: 'var', name: 'view' },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {
        create:
          'create@http://localhost:3000/_next/static/runtime/remoteEntry.js',
        single:
          'single@http://localhost:3002/_next/static/runtime/remoteEntry.js',
      },
      exposes: {},
      shared: {},
    })
  );

  return config;
};
