import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import ContentCards from '../components/contentCards'
import { Spring } from 'react-spring'

const heightMediaQuery = window.screen.height >= 812 ? 600 : 150

const IndexPage = ({ location }) => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        file(relativePath: { regex: "/cms/" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout location={location}>
          <Spring from={{ height: 200 }} to={{ height: heightMediaQuery }}>
            {styles => (
              <div style={{ overflow: 'hidden', ...styles }}>
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
            )}
          </Spring>
          <ContentCards />
        </Layout>
      </>
    )}
  />
)

export default IndexPage
