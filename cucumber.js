const commonConfig = {
  paths: ['./src/exercises/exercise-2.feature'],
  requireModule: ['ts-node/register'],
  require: [
    './config/**/*.ts',
    './src/hooks/hooks.ts',
    './src/step-definitions/**/*.ts',
  ],
  formatOptions: { snippetInterface: 'async-await' },
  format: ['html:reports/report.html'],
  parallel: 4,
};

module.exports = {
  default: {
    ...commonConfig,
  },
  debug: {
    ...commonConfig,
    tags: '@debug and not @ignore',
    failFast: true,
  },
};
