/* eslint-disable import/no-extraneous-dependencies */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: process.env.APP_URL,
    },
})
