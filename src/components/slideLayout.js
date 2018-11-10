import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from './layout.js'

const SlideNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export default class SlideLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props

    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <SlideNav>
          {markdownRemark.frontmatter.lastSlide ? (
            <Link to={markdownRemark.frontmatter.lastSlide}>Last Slide</Link>
          ) : null}
          {markdownRemark.frontmatter.nextSlide ? (
            <Link to={markdownRemark.frontmatter.nextSlide}>Next Slide</Link>
          ) : null}
        </SlideNav>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
        nextSlide
        lastSlide
      }
    }
    file(relativePath: { regex: "/cms/" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
  }
`
