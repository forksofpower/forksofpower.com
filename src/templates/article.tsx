import React from "react"
import { PageProps, Link, graphql } from "gatsby";

import Layout from '../components/layout'
import SEO from "../components/seo"
import BlogPost from "../components/BlogPost"

type DataProps = {
   allDevArticles: {
       edges: {
           node: {
               article: {
                   title: string,
                   slug: string,
                   body_html: string
               }
           }
       }
   } 
}

const Article: React.FC<PageProps<DataProps>> = ({data}) => {
    const article = data.allDevArticles.edges[0].node.article
    
    return (
        <Layout>
            <SEO title={`${article.title}`} />
            <BlogPost post={article} />
            <footer>
                <a href={article.url}>Original Article</a>
            </footer>
        </Layout>
    )
}

export default Article

export const pageQuery = graphql`
    query PageQuery($id: Int!) {
        allDevArticles(filter: {article: { id: { eq: $id} } }) {
            edges {
                node {
                    article {
                        title
                        slug
                        body_html
                        url
                    }
                }
            }
        }
    }

`