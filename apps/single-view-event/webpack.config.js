const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = (config) => {
  config.plugins.push(
    new NextFederationPlugin({
      name: 'single',
      library: { type: 'var', name: 'single' },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {
        create:
          'create@http://localhost:3000/_next/static/runtime/remoteEntry.js',
        view: 'view@http://localhost:3001/_next/static/runtime/remoteEntry.js',
      },
      exposes: {},
      shared: {},
    })
  );

  return config;
};
