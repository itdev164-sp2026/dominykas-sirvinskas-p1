require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Acoustic Guitar Songbook`,
    description: `Acoustic guitar lessons and song guides.`,
    author: `Dominykas Sirvinskas`,
    siteUrl: `https://guitar.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `acoustic-guitar-songbook`,
        short_name: `songbook`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}