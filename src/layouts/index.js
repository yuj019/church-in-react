import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from "gatsby"

import Header from '../components/header'
import './index.css'
import Footer from '../components/footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header />
      {children()}
      <Footer links={data.allContentfulLink.edges}>
        The site of Church in San Jose. Coded with love in React by Yumei Jin <a href="mailto:yumeijin0601@gmail.com">Email me</a> to ask anything. © 2020
      </Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
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
`
