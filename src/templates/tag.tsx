import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BlogCard from "../components/BlogCard"

const Tag = ({ data }) => (
  <Layout hero={{
    title: "tags"
  }}>
    {data.allDevArticles.edges.map(({ node }, key) => (
      <BlogCard
        key={key}
        post={{
          ...node.article,
          tag_list_array: node.article.tag_list
            .split(",")
            .map(tag => tag.trim()),
        }}
      />
    ))}
  </Layout>
)

export default Tag

export const pageQuery = graphql`
  query TagQuery($tag: String) {
    allDevArticles(filter: { article: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          article {
            id
            path
            title
            slug
            tag_list
            readable_publish_date
            positive_reactions_count
            comments_count
            social_image
          }
        }
      }
    }
  }
`
