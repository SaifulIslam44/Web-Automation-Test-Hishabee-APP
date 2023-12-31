exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    exclude: [],
    maxInstances: 10,
    capabilities: [
      {
        maxInstances: 5,
        browserName: 'chrome',
      },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
      requireModule: ['@babel/register'],
      require: ['./features/step-definitions/*.js'],
      backtrace: false,
      dryRun: false,
      failFast: false,
      format: ['pretty'],
      colors: true,
      snippets: true,
      source: true,
      profile: [],
      strict: false,
      tagExpression: '',
      timeout: 60000,
      ignoreUndefinedDefinitions: false,
    },
  };
  