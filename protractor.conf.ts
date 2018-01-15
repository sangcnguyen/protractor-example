// `baseUrl` property is passed in as a param
import { Config, browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {
  allScriptsTimeout: 11000,

  // ----- The test framework -----
  framework: 'jasmine',

  capabilities: {
    browserName: 'chrome'
  },

  jasmineNodeOpts: {
    // If true, print colors to the terminal.
    showColors: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000,
    // Remove protractor dot reporter; we are using a custom reporter instead
    print: function () { }
  },

  // Keep max browsers running to 1 because
  // Multiple browsers running at once was pausing/failing for no reason
  maxSessions: 1,

  // Set no globals to true to avoid jQuery '$' and protractor '$'
  // Collisions on the global namespace.
  noGlobals: true,

  onPrepare: () => {
    // Use `jasmine-spec-reporter` as the spec result reporter
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    // Set browser window
    browser.driver.manage().window().maximize();
  },

  //params: {
  //baseUrl: 'localhost:4200',
  //},

  // Spec patterns are relative to the current working directory when protractor is called.
  specs: ['tests/**/*spec.js'],

  // If want to target a specific spec file (eg while creating a new one)
  // specs: [ 'specs/login/loginGlobalHeader.spec.js' ],

  seleniumAddress: 'http://localhost:4444/wd/hub'
};
