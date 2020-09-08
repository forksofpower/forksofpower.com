const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allDevArticles {
        edges {
          node {
            article {
              id
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const articleTemplate = path.resolve(`./src/templates/article.tsx`)

    const allEdges = result.data.allDevArticles.edges

    // Iterate over the array of edges
    allEdges.forEach(({ node }) => {
      const article = node.article
      // create the gatsby page for the Dev.to article
      createPage({
        path: `/${article.slug}`,
        component: articleTemplate,
        context: {
          id: article.id,
        },
      })
    })
  })
}

exports.onCreateNode = ({node, actions, getNode}) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value
        })
    }
}