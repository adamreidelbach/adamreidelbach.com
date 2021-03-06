module.exports = {
  siteMetadata: {
    title: 'Adam Reidelbach',
    description: 'Adam Reidelbach - Software Developer'
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 568
            }
          }
        ],
        plugins: [{ resolve: 'gatsby-remark-images' }]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images'
      }
    },
    {
      resolve: 'gatsby-plugin-emoji-favicon',
      options: {
        emoji: '👋'
      }
    }
  ]
};
