module.exports = {
  siteMetadata: {
    title: 'Meet GatsbyJS',
    description: 'GatsbyJS talk on learning GatsbyJS',
    siteUrl: 'https://www.meetgatsby.tech'
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'meet-gatsby',
        short_name: 'MeetGatsby',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/slides`,
        name: 'slides'
      }
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify'
  ],
}
