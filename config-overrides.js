const { override, addWorkerLoader } = require('./customize-cra');

module.exports = override(addWorkerLoader());