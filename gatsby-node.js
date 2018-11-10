const path = require('path');


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    graphql(` 
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }    
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: `/slides${node.frontmatter.slug}`,
          component: path.resolve('./src/components/slideLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          }
        });
      })
      resolve();
    })
  });
}
