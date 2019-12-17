module.exports = {
  siteMetadata: {
    title: `Jordan Portfolio`,
    description: `My Portfolio.`,
    author: `@jordanriley`,
  },
  plugins: [
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "3589as9m",
        dataset: "portfolio",
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        //token: '',
        //watchMode: true,
        //overlayDrafts: true
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
