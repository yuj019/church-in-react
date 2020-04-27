module.exports = {
  siteMetadata: {
    title: 'The Church in San Jose',
    description: 'Messages and meeting informations for the Lord recovery. Saints and gospel friends are welcome!',
    keywords: 'christian, church in san jose'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'zw0tbml8lqa5',
        accessToken: 'S9MYIwPln969kFrFQt-lfvoTR_97L63s35Fnk3Hb6hY'
      }
    }
  ],
}
