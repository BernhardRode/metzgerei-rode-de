module.exports = {
  siteMetadata: {
    title: 'Rode Catering Beilstein',
    author: 'Bernhard Rode',
    description: 'Webseite des Partyservice Rode Catering in Beilstein.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'rode-catering-de',
        short_name: 'rode-catering-de',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
