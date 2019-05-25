import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header';
import './index.css'
import Footer from '../components/Footer';
import { StaticQuery, graphql } from "gatsby"
import favicon from '../images/favicon-32x32.png';

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
          <Helmet 
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}defaultTitle={data.site.siteMetadata.title} 
            link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
            ]}
          />
          <Header />
          <div>
            {children}
          </div>
          <Footer data={data}>
            © Copyright 2019. All rights reserved.<br></br>
          </Footer>
        </>
      )}
     />
   )


   export default Layout;

