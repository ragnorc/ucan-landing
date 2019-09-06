// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "UCAN",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: "yfl4ttznv59t",
        accessToken: "7tiW30--Z-Napzcib4KZ-Wdi_fHugRo-hC52fQS66u0", //process.env.CONTENTFUL_TOKEN,
        host: "cdn.contentful.com",
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        typename: "Contentful"
      }
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
