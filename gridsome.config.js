// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "UCAN",
  titleTemplate: "%s | UCAN",
  siteUrl: "https://ucanetwork.co.uk",
  icon: {
    favicon: "./src/assets/img/logos/favicon-32x32.png",
    touchicon: "./src/assets/img/logos/apple-touch-icon.png"
  },

  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: "yfl4ttznv59t",
        accessToken: "7tiW30--Z-Napzcib4KZ-Wdi_fHugRo-hC52fQS66u0", //process.env.CONTENTFUL_TOKEN,
        host: "cdn.contentful.com",
        // environment: process.env.CONTENTFUL_ENVIRONMENT,
        typename: "Contentful"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        exclude: ["/privacy"],
        config: {
          "/blog-post/*": {
            priority: 1
          },
          "/blog": {
            changefreq: "weekly",
            priority: 1
          },
          "/services": {
            changefreq: "monthly",
            priority: 0.5
          }
        }
      }
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
