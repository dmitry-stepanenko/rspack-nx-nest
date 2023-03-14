const { composePlugins, withNx } = require('@nrwl/rspack');

module.exports = composePlugins(withNx(), (config) => {
  return config;
});
