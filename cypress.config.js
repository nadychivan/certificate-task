const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  //defaultCommandTimeout: 3000,
  retries: { openMode: 2, runMode: 2 },

  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: 'https://js-55fbfg.stackblitz.io/',
    //excludeSpecPattern: '**cypress/e2e/[specFoldernamehere]',




  },
});
