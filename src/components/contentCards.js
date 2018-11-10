import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

const SlideLayout = styled.article`
  border-radius: 4px;
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
  margin-bottom: 1rem;
  padding: 1rem;

  a {
    color: black;
    text-decoration: none;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    font-size: 0.8rem;
  }

  .read-more {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: rebeccapurple;
  }
`

const ContentCards = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <SlideLayout key={node.frontmatter.slug}>
          <Link to={`/slides${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{`Position: ${node.frontmatter.date}`}</p>
          <p>{node.excerpt}</p>
          <Link className="read-more" to={`/slides${node.frontmatter.slug}`}>
            Read More
          </Link>
        </SlideLayout>
      ))
    }
  />
)

export default ContentCards

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(sort: { order: ASC, fields: [id] }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  }
`
