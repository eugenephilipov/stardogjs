const ENV_VAR_MASK = 'REACT_APP_';
// Extract env variables by mask
const filterEnv = (mask, env) => Object.keys(env)
  .filter(key => key.startsWith(mask))
  .reduce((acc, curr) => Object.assign({}, acc, {[curr]: env[curr]}), {});

const injectEnv = (): void => {
  Object.defineProperty(window, 'env', {
    configurable: false,
    enumerable: true,
    value: Object.freeze(filterEnv(ENV_VAR_MASK, process.env)),
    writable: false,
  });
};

export default injectEnv;
