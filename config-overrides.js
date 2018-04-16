const rewireTypescript = require('./tools/cra-rewire-typescript');

module.exports = function override(config, env) {
  // do stuff with the webpack config here
  // ...

  // add typescript support
  return rewireTypescript(config, env);
};
