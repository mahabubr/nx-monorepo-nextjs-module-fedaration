process.env.NEXT_PRIVATE_LOCAL_WEBPACK = 'true';

const { composePlugins, withNx } = require('@nx/next');
const applyModuleFederation = require('./webpack.config');

const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack: (config, options) => {
    return applyModuleFederation(config);
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
