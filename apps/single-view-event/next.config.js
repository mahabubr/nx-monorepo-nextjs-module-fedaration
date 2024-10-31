process.env.NEXT_PRIVATE_LOCAL_WEBPACK = true;

const { composePlugins, withNx } = require('@nx/next');
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack(config, options) {
    const { isServer } = options;

    config.output.publicPath = 'auto';

    config.plugins.push(
      new NextFederationPlugin({
        name: 'single',
        remotes: {
          view: `view@http://localhost:3001/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
          create: `create@http://localhost:3000/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        shared: {},
        publicPath: 'auto',
      })
    );

    return config;
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
