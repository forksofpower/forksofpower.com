const path = require("path")
const slugify = require('slugify')
const { createFilePath } = require("gatsby-source-filesystem")

const slugOptions = {
    replacement: '-',
    lower: true
}

// slug helper
const toSlug = (string) => {
    return slugify(string, slugOptions)
}

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
              title
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
      const customSlug = toSlug(article.title)
      // create the gatsby page for the Dev.to article
      createPage({
        path: `/${customSlug}`,
        component: articleTemplate,
        context: {
          id: article.id,
        },
      })
    })
  })
}

exports.createResolvers = ({ createResolvers }) => {
    const resolvers = {
        DevArticlesArticle: {
            customSlug: {
                type: "String!",
                resolve: (source, args, context) => {
                    return toSlug(source.title)
                }
            }
        }
    }
    createResolvers(resolvers)
}
// exports.onCreateNode = ({node, actions, getNode}) => {
//     const { createNodeField } = actions

//     if (node.internal.type === `MarkdownRemark`) {
//         const value = createFilePath({ node, getNode })
//         createNodeField({
//             name: `slug`,
//             node,
//             value
//         })
//     }
// }