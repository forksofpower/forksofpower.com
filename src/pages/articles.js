import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BlogCard from "../components/BlogCard"
import SEO from "../components/seo";

const ArticlesPage = ({data: {articles, tags}}) => (
  <Layout>
    <SEO title="Articles" />
    <div className="flex sm:flex-col lg:flex-row">
      <div className="lg:w-2/3">
        {articles.edges.map((node, key) => (
        <BlogCard
          key={key}
          post={{
            ...node.node.article,
            tag_list_array: node.node.article.tag_list.split(',').map(tag => tag.trim())
          }}
        />
      ))}
      </div>
      <div className="lg:w-1/3 pl-4" >
        <h2>Popular Topics</h2>
        {tags.group.map(({tag}) => (
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <Link to={`/tag/${tag}`}>#{tag}</Link>
          </span>
        ))}
      </div>
    </div>
  </Layout>
)

export default ArticlesPage

export const query = graphql`
  query ArticlesPageQuery {
    articles: allDevArticles {
      edges {
        node {
          article {
            id
            path
            cover_image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            slug
            tag_list
            tags
            description
            # flare_tag {
            #   name
            # }
            readable_publish_date
            positive_reactions_count
            comments_count
            # social_image
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
`