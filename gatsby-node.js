const path = require("path")
const slugify = require("slugify")
const { createFilePath, createRemoteFileNode } = require("gatsby-source-filesystem")
// const { toSlug } = require("./src/helpers")

const articleTemplate = path.resolve(`./src/templates/article.tsx`)
const tagTemplate = path.resolve('./src/templates/tag.tsx')

const slugOptions = {
  replacement: "-",
  lower: true,
}

// slug helper
const toSlug = string => {
  return slugify(string, slugOptions)
}

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    let result = await graphql(`
    {
        articles: allDevArticles {
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
        tags: allDevArticles {
            group(field: article___tags) {
                tag: fieldValue
            }
        }
    }
    `)
    const allArticles = result.data.articles.edges
    const allTags = result.data.tags.group

    // create article pages
    allArticles.forEach(({ node }) => {
        const article = node.article
        // create the gatsby page for the Dev.to article
        // use the rewritten slug as the path for now
        createPage({
            path: `/article/${article.slug}`,
            component: articleTemplate,
            context: {
              id: article.id
            }
        })
    })

    // create tag pages
    allTags.forEach(({ tag }) => {
        createPage({
            path: `/tag/${toSlug(tag)}`,
            component: tagTemplate,
            context: {
                tag: tag
            }
        })
    })

}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId
}) => {
  if(node.internal.type === "DevArticles" && node.article.cover_image !== null) {
    let fileNode = await createRemoteFileNode({
      url: node.article.cover_image,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store
    })

    if (fileNode) {
      node.article.cover_image___NODE = fileNode.id
    }
  }
}
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    DevArticlesArticle: {
      // rewrite dev.to slug to a useful format
      slug: {
        type: "String!",
        resolve: source => {
          return toSlug(source.title)
        },
      },
    },
  }
  createResolvers(resolvers)
}
