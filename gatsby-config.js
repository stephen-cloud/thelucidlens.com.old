require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `the lucid lens`,
    siteHeadline: `the lucid lens made with ❤️ by stephen harrison`
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `the lucid lens`,
        location: `boston, mass`,
        socialMedia: [],
        formatString: `M/D/YYYY`,
        showThemeAuthor: false
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the lucid lens`,
        short_name: `the lucid lens`,
        description: `a portfolio site using the awesome @lekoarts/gatsby-theme-emilia.`,
        start_url: `/`,
        background_color: `#aaa`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
