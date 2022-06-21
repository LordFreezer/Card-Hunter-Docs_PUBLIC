/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Card Hunter Documentation',
    author: 'Sonny Icks, Chad Marshall, Julian Shen, Giovanni Soto, and Chris Syfrett',
    creator: 'Chad Marshall'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              ignoreFileExtensions: []
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1TISZOWdyx9lhBYpnIxcgiSbx79vaV7g6mFdY_S-MHYM',
        credentials: require('./service_account.json')
      }
    },
  ],
}
