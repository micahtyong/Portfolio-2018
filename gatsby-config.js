module.exports = {
  siteMetadata: {
    title: 'Micah Yong',
    description: 'Hi, I’m Micah - an LA-born, computer science student at the University of California, Berkeley.',
    keywords: 'micah yong, ios development, swift, apple, machine learning, coreml tools, firebase, opencv, open computer vision library, charts api, university of california, berkeley, uc berkeley, los angeles, programmer, designer, developer'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'g14qccr6u51s',
        accessToken: 'wI_g0Ce_9rt_vMZ6Z1GjdACeGHw4z0o6uV-bYGJ3eCw'
      }
    }
  ],
}
