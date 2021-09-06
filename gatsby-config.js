module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "visualgroupdigital",
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "285287660",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
