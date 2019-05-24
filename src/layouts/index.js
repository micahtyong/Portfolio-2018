import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header';
import './index.css'
import Footer from '../components/Footer';
import { StaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => (
  <StaticQuery
     query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              keywords
            }
          }
          allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
            edges {
              node {
                title
                url
                createdAt
              }
            }
          }
        }
      `}
     render={data => (
        <>
          <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
          <Header />
          <div>
            {children}
          </div>
          <Footer data={data}>
            © Copyright 2019. ALL RIGHTS RESERVED.<br></br>
          </Footer>
        </>
      )}
     />
   )


   export default Layout;


// const Layout = ({ children, data }) => (
//   <div>
//     <Helmet
//       title={data.site.siteMetadata.title}
//       meta={[
//         { name: 'description', content: data.site.siteMetadata.description },
//         { name: 'keywords', content: data.site.siteMetadata.keywords },
//       ]}
//     />
//     {children}
    
    
//   </div>
// )

// Layout.propTypes = {
//   children: PropTypes.func,
// }


// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//         description
//         keywords
//       }
//     }
//     allContentfulLink {
//       edges {
//         node {
//           title
//           url
//         }
//       }
//     }
//   }
// `
