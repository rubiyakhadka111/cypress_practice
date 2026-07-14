const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://customer-portal.worldlink.com.np",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
