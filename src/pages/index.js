import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import ContentCards from '../components/contentCards'
import { Spring } from 'react-spring'

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
          <Spring from={{ height: 200 }} to={{ height: 600 }}>
            {styles => (
              <div style={{ overflow: 'hidden', ...styles }}>
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
            )}
          </Spring>
          <a href="https://drive.google.com/open?id=1sk-nLaNQhZcD7Nb9_KxExF37H1ZkNIDxyMsCdsrOlyE">Google Slides</a>
          <a href="https://github.com/LinnJS/meet-gatsby">GitHub Repo</a>
          <ContentCards />
        </Layout>
      </>
    )}
  />
)

export default IndexPage
