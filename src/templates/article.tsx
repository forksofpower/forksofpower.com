import React from "react"
import { PageProps, Link, graphql } from "gatsby";

import Layout from '../components/layout'
import SEO from "../components/seo"

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

const Article: React.FC<PageProps<DataProps>> = ({dataProps}) => {
    const article = data.allDevArticles.edges[0].node.article
    
    return (
        <Layout>
            <SEO title={`${article.title}`} />
            <BlogPost post={article} />
        </Layout>
    )
}

export default Article

export const pageQuery = graphql`
    query PageQuery($id: Int!) {
        allDevArticles(filter: {article: { id: { eq: $id} } }) {
            edges {
                nodes {
                    article {
                        title
                        slug
                        body_html
                    }
                }
            }
        }
    }

`