const { composePlugins, withNx } = require('@nrwl/rspack');

module.exports = composePlugins(withNx(), (config) => {
  delete config.builtins.html;
  return config;
});
